import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App(){
  return(
          <div className='App'>
            <Header />
            <main>
                  <About />
                  <Projects />
                  <Contacts />
            </main>
          </div>

  )
}

export default App;