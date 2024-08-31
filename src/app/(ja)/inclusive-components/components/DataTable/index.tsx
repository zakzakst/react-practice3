"use client";
import { table as style } from "./styles.css";

const headers: string[] = ["Band", "Singer", "Inception", "Label"];
const rows: string[][] = [
  ["Napalm Death", "Barney Greenway", "1981", "Century Media"],
  ["Carcass", "Jeff Walker", "1985", "Earache"],
  ["Extreme Noise Terror", "Dean Jones", "1985", "Candlelight"],
  ["Discordance Axis", "Jon Chang", "1992", "Hydrahead"],
];

export const Table = () => {
  return (
    <table className={style.main}>
      <caption>test</caption>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th role="columnheader" scope="col" key={i}>
              {header}
              {/* TODO: ソートボタン作成 */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, i) => (
              <th key={i} scope={i < 1 ? "row" : undefined}>
                {cell}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
