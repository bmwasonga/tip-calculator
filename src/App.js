import logo from './images/logo.svg';
const { default: Calc } = require('./Calc');

function App() {
  return (
    <div className="bg-lightGrayCyan desk:h-screen h-screen flex justify-center flex-col items-center font-mono">
      <img src={logo} alt="logo" className="m-3" />
      <Calc />
    </div>
  );
}

export default App;
