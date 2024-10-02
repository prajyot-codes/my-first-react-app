import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import About from './components/About'

function App() {
  const [mode, setMode] = useState("light"); //Whether darkMode is enabledor not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode ('dark');
      document.body.style.backgroundColor='#01185d'
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")

    }
  };
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below" Alert={showAlert} mode={mode} />
        {/* <About /> Fix: Use correct JSX syntax */}
      </div>
    </>
  );
}

export default App;
