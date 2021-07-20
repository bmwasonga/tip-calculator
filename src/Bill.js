import React from 'react';
import { tips } from './data';

export default function Bill() {
  return (
    <div className="bg-white p-3">
      <h2 className="text-darkGrayCyan m-2">Bill</h2>
      <input
        type="text"
        className="bg-lightGrayCyan2
      text-veryDarkcyan font-medium p-2 rounded w-full
      focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent
      "
        placeholder="$"
      />

      {/* Change the input type */}
      <h2 className="text-darkGrayCyan m-2">Select Tip %</h2>
      <div className="grid desk:grid-cols-3 grid-cols-2 text-center m-2">
        {tips.map((tip) => {
          const { id, percent } = tip;
          return (
            <p
              key={id}
              className="m-2 p-2 bg-veryDarkcyan text-white rounded
              cursor-pointer hover:bg-strongCyan hover:text-veryDarkcyan active:bg-strongCyan 
              active:text-veryDarkcyan"
            >
              {percent}
            </p>
          );
        })}
        <div className="bg-lightGrayCyan2 flex justify-center items-center cursor-pointer">
          <p>Custom</p>
        </div>
      </div>
      <h2 className="text-darkGrayCyan m-2">Number of People</h2>
      <input
        type="text"
        className="bg-lightGrayCyan2
      text-veryDarkcyan font-medium p-2 rounded w-full
      focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent

      "
        placeholder="$"
      />
    </div>
  );
}
