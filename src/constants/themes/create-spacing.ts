import {
  spacingProperties,
  spacingDirections,
  SpacingDirections,
  SpacingValues,
  SpacingPropertyKey,
  SpacingDirectionKey,
  SpacingValueKey,
  SpacingValuesObj,
  SpacingDirectionsObj,
  SpacingObj,
} from "@/constants/themes/_types-spacing";

/**
 * スペーシングのCSSを設定したオブジェクト取得
 * @param values 各スペース値
 * @returns 下記例
 * {
 *   'm': {
 *     't': { 0: 'margin-top: 0;', ... },
 *     'r': { 0: 'margin-right: 0;', ... },
 *     ...
 *   },
 *   ...
 * }
 */
const createSpacing = (values: SpacingValues): SpacingObj => {
  /**
   * CSSプロパティ取得
   * @param property margin/paddingを指定するkey
   * @param direction 方向を指定するkey（verticalとhorizontalは生成関数の分岐で「t,r,b,l」を利用する処理をするため除外）
   * @returns CSSプロパティの文字列
   */
  const getSpacingCssProperty = (
    property: SpacingPropertyKey,
    direction: Exclude<SpacingDirectionKey, "v" | "h">
  ): string => {
    if (["t", "r", "b", "l"].includes(direction)) {
      return `${spacingProperties[property]}-${spacingDirections[direction]}`;
    } else {
      return spacingProperties[property];
    }
  };

  /**
   * CSSのスペース値取得
   * @param value スペース値を指定するkey
   * @returns CSSのスペース値
   */
  const getSpacingCssValue = (value: SpacingValueKey): string | 0 => {
    // valueが0以外の場合、末尾に「px」を付ける
    return values[value] !== 0 ? `${values[value]}px` : 0;
  };

  /**
   * CSS取得
   * @param property margin/paddingを指定するkey
   * @param direction 方向を指定するkey
   * @param value スペース値を指定するkey
   * @returns CSS文字列（下記「direction === v」の時の例）
   * 'margin-top: 4px; margin-bottom: 4px;'
   */
  const getSpacingCss = (
    property: SpacingPropertyKey,
    direction: SpacingDirectionKey,
    value: SpacingValueKey
  ): string => {
    if (direction === "v") {
      const cssPropertyTop = getSpacingCssProperty(property, "t");
      const cssPropertyBottom = getSpacingCssProperty(property, "b");
      const cssValue = getSpacingCssValue(value);
      return `
        ${cssPropertyTop}: ${cssValue};
        ${cssPropertyBottom}: ${cssValue};
      `;
    } else if (direction === "h") {
      const cssPropertyRight = getSpacingCssProperty(property, "r");
      const cssPropertyLeft = getSpacingCssProperty(property, "l");
      const cssValue = getSpacingCssValue(value);
      return `
        ${cssPropertyRight}: ${cssValue};
        ${cssPropertyLeft}: ${cssValue};
      `;
    } else {
      const cssProperty = getSpacingCssProperty(property, direction);
      const cssValue = getSpacingCssValue(value);
      return `
        ${cssProperty}: ${cssValue};
      `;
    }
  };

  /**
   * 各スペース値のCSSを設定したオブジェクト取得
   * @param property margin/paddingを指定するkey
   * @param direction 方向を指定するkey
   * @param values 各スペース値
   * @returns 下記例
   * {
   *   0: 'margin-top: 0;',
   *   4: 'margin-top: 4px;',
   *   ...
   * }
   */
  const getSpacingValuesObj = (
    property: SpacingPropertyKey,
    direction: SpacingDirectionKey,
    values: SpacingValues
  ): SpacingValuesObj => {
    const obj = Object.keys(values).reduce(
      // 各スペース値を設定
      (acc, valueStr) => {
        const value = Number(valueStr) as SpacingValueKey;
        acc[value] = getSpacingCss(property, direction, value);
        return acc;
      },
      {} as SpacingValuesObj
    );
    return obj;
  };

  /**
   * 各方向のCSSを設定したオブジェクト取得
   * @param property margin/paddingを指定するkey
   * @param directions 各方向
   * @param values 各スペース値
   * @returns 下記例
   * {
   *   't': { 0: 'margin-top: 0;', ... },
   *   'r': { 0: 'margin-right: 0;', ... },
   *   ...
   * }
   */
  const getSpacingDirectionsObj = (
    property: SpacingPropertyKey,
    directions: SpacingDirections,
    values: SpacingValues
  ): SpacingDirectionsObj => {
    const obj = Object.keys(directions).reduce(
      // 各方向の値を設定
      (acc, directionStr) => {
        const direction = directionStr as SpacingDirectionKey;
        acc[direction] = getSpacingValuesObj(property, direction, values);
        return acc;
      },
      {} as SpacingDirectionsObj
    );
    return obj;
  };

  // スペーシングのCSSを設定したオブジェクト
  const obj = Object.keys(spacingProperties).reduce(
    // margin/paddingの値を設定
    (acc, propertyStr) => {
      const property = propertyStr as SpacingPropertyKey;
      acc[property] = getSpacingDirectionsObj(
        property,
        spacingDirections,
        values
      );
      return acc;
    },
    {} as SpacingObj
  );
  return obj;
};

export default createSpacing;
