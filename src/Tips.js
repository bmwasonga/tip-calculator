import React, { createContext } from 'react';

export const AppContext = createContext();

export default function Tips() {
  return (
    <div className="bg-veryDarkcyan rounded-xl p-5 relative h-full w-full">
      <div className=" grid grid-cols-2 gap-1 ">
        <div className="my-2">
          <h3 className="text-white">Tip Amount</h3>
          <span className="text-darkGrayCyan ">/ person</span>
        </div>
        <div className="">
          <h1 className="text-strongCyan text-right text-4xl font-mono font-extrabold">
            $4.270
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-1">
        <div className="my-2">
          <h3 className="text-white">Total</h3>
          <span className="text-darkGrayCyan">/ person</span>
        </div>
        <div className="">
          <h1 className="text-strongCyan text-right text-4xl font-extrabold">
            $32.79
          </h1>
        </div>
      </div>

      <button
        name="button"
        className="bg-strongCyan hover:opacity-75 w-10/12 p-2 rounded absolute 
        desk:inset-x-6 desk:bottom-6 inset-x-12  bottom-7 text-veryDarkcyan"
      >
        RESET
      </button>
    </div>
  );
}
