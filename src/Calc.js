import React from 'react';
import Bill from './Bill';
import Tips from './Tips';

export default function Calc() {
  return (
    <div className="bg-white rounded-xl p-5 grid desk:grid-cols-2 ">
      {/* w-full h-5/6 */}

      <Bill />
      <Tips />
    </div>
  );
}
