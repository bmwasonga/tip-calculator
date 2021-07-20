const { default: Calc } = require('./Calc');

function App() {
  return (
    <div className="bg-lightGrayCyan desk:h-screen h-screen flex justify-center flex-col items-center font-mono">
      <h1 className="uppercase tracking-widest font-mono font-bold text-veryDarkcyan h-1/4">
        SPLITTER
      </h1>
      <Calc />
    </div>
  );
}

export default App;
