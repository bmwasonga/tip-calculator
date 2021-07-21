import React, { useState } from 'react';
import Bill from './Bill';
import Tips from './Tips';
import tips from './data';

export default function Calc() {
  // const [appState, setState] = useState({
  //   activeObject: [0],
  //   tips,
  // });
  // const [bill, setBill] = useState(0);
  // const [people, setPeople] = useState(1);

  // const handleActive = (id) => {
  //   setState({ ...appState, activeObject: appState.tips[id] });
  // };

  // const toggleActive = (id) => {
  //   if (appState.tips[id] === appState.activeObject) {
  //     return 'focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <div className="bg-white rounded-xl p-5 grid desk:grid-cols-2 desk:w-2/3 desk:h-auto w-full h-full">
      {/* w-full h-5/6 */}

      <Bill />
      <Tips />
    </div>
  );
}
