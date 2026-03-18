import './App.css';
import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Form from './components/form/Form';

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
