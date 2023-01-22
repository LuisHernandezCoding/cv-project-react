import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <div className="content">
          <br />
          <Form />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
