// 配列の合計を求める
const getSum = (numbers: number[]): number => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum;
};

// 配列内の最大値を求める
const getMax = (numbers: number[]): number => {
  const max = numbers.reduce(
    (acc, current) => Math.max(acc, current),
    numbers[0]
  );
  return max;
};

// 配列のユニークな値を取得する
const getUnique = (numbers: number[]): number[] => {
  const unique = numbers.reduce<number[]>((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
  return unique;
};

// 配列をオブジェクトに変換する
// () => {
//   const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//   ];

//   const peopleByName = people.reduce((accumulator, person) => {
//     accumulator[person.name] = person.age;
//     return accumulator;
//   }, {});

//   console.log(peopleByName);
//   // { Alice: 25, Bob: 30, Charlie: 35 }
// };

// ネストした配列をフラットにする
// () => {
//   const nestedArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ];
//   const flattenedArray = nestedArray.reduce(
//     (accumulator, currentValue) => accumulator.concat(currentValue),
//     []
//   );

//   console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
// };
