import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  //useState for Color mode
  const [mode, setMode] = useState('light'); //state variables :- whether dark mode is enabled or not
  
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }


  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);
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
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText="About us" />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} textarea="Enter the text to analyze" />} />
     <Route path="/About" element={<About mode={mode} />} />
      </Routes>
      </div>
      </Router>
      </div>

    </>
  );
}

export default App;
