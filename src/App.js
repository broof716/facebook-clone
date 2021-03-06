import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      { !user ?(
        <Login />
      ) : (
        <>
          <Header />
          
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
