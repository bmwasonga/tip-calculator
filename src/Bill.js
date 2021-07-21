import React, { useState, createContext } from 'react';
import { tips } from './data';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg';

export default function Bill() {
  const [appState, setState] = useState({
    activeObject: [0],
    tips,
  });

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [showCustom, setShowCustom] = useState(false);

  const handleActive = (id) => {
    setState({ ...appState, activeObject: appState.tips[id] });
  };

  const toggleActive = (id) => {
    if (appState.tips[id] === appState.activeObject) {
      return 'focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
    } else {
      return null;
    }
  };

  return (
    <div className="bg-white p-3">
      <h2 className="text-darkGrayCyan m-2">Bill</h2>
      <div className="relative">
        <img
          src={dollar}
          alt="dollar"
          className="absolute inset-x-2 bottom-3"
        />
        <input
          type="text"
          className="bg-lightGrayCyan2
      text-veryDarkcyan font-medium p-2 rounded w-full
      focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent text-right"
          value={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </div>

      <h2 className="text-darkGrayCyan m-2">Select Tip %</h2>
      <div className="grid desk:grid-cols-3 grid-cols-2 text-center m-2">
        {tips.map((tip) => {
          const { id, percent } = tip;
          return (
            <p
              key={id}
              className={`${toggleActive(
                id - 1
              )} m-2 p-2 bg-veryDarkcyan text-white rounded cursor-pointer hover:bg-strongCyan hover:text-veryDarkcyan`}
              onClick={() => {
                handleActive(id - 1);
              }}
            >
              {percent}%
            </p>
          );
        })}
        <div className="bg-lightGrayCyan2 flex justify-center items-center cursor-pointer bg-contain">
          <p onClick={() => setShowCustom(!showCustom)}>
            {!showCustom ? (
              <p>Custom</p>
            ) : (
              <input
                type="text"
                className="bg-lightGrayCyan2
        text-veryDarkcyan font-medium p-2 rounded w-full
          focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent text-right
      "
                placeholder="1"
                value={people}
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
              />
            )}
          </p>
        </div>
      </div>
      <h2 className="text-darkGrayCyan m-2">Number of People</h2>
      <div className="relative ">
        <img
          src={person}
          alt="person"
          className="absolute inset-x-2 bottom-3 "
        />

        <input
          type="text"
          className="bg-lightGrayCyan2
        text-veryDarkcyan font-medium p-2 rounded w-full
          focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent text-right
      "
          placeholder="1"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
