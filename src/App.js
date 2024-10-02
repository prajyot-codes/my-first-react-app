import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import About from './components/About'

function App() {
  const [mode, setMode] = useState("light"); //Whether darkMode is enabledor not
  const toggleMode = () => {
    if (mode === "light") {
      setMode ('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor='white'

    }
  };
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> Fix: Use correct JSX syntax */}
      </div>
    </>
  );
}

export default App;
