
import React from 'react';
import './App.css';
import Review from './views/review';



function App() {
  return (
   <main>
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='uderline'></div>
      </div>
      <Review/>
    </section>
   </main>
  );
}

export default App;
