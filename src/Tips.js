import React from 'react';

export default function Tips() {
  return (
    <div className="bg-veryDarkcyan rounded-xl p-5">
      <div className=" grid grid-cols-2 gap-1">
        <div className="">
          <h3 className="text-white">Tip Amount</h3>
          <span className="text-darkGrayCyan ">/ person</span>
        </div>
        <div className="">
          <h1 className="text-strongCyan text-right">$4.27</h1>
        </div>
      </div>

      <div className=" grid grid-cols-2 gap-1">
        <div className="">
          <h3 className="text-white">Total</h3>
          <span className="text-darkGrayCyan">/ person</span>
        </div>
        <div className="">
          <h1 className="text-strongCyan text-right">$32.79</h1>
        </div>
      </div>

      <button
        name="button"
        className="bg-strongCyan w-10/12 p-1 rounded text-veryDarkcyan"
      >
        RESET
      </button>
    </div>
  );
}
