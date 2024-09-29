import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About'

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <div className="container">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About /> {/* Fix: Use correct JSX syntax */}
      </div>
    </>
  );
}

export default App;
