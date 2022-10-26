import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     {/* particle js */}

     {/* navbar component */}

     {/* main page content */}
     <Routes>
      {/* create all routes */}
      <Route path='/' index element={<Home />} />
      <Route path='/about' index element={<About />} />
      <Route path='/resume' index element={<Resume />} />
      <Route path='/skills' index element={<Skills />} />
      <Route path='/portfolio' index element={<Portfolio />} />
      <Route path='/contact' index element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
