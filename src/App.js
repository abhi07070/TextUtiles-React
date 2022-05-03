import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  //useState for Color mode
  const [mode, setMode] = useState('light'); //state variables :- whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a263f';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  //
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  return (
    <>

      <div>
        {/* <Router> */}
        <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
        <TextForm tittle="Enter any text here" showAlert={showAlert}
          mode={mode} />
        {/* </Route> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* </Routes> */}
        {/* </Router> */}
      </div>

    </>
  );
}

export default App;
