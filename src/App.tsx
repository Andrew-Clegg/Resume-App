import React from 'react';
import Card from './Card';
import './App.css'

const App: React.FC = () => {
  return (
    // Show Resume Page
    <div>
      <header> 
        <h1>Andrew Clegg</h1> 
        <h2>Computer Science Undergraduate</h2>
      </header>
      <h6>
        Oshawa, ON, Canada | 
        Tele: | 
        @ |
        <a href='https://linkedin.com/in/andrew-clegg-tech'>LinkedIn</a> |
        <a href='https://github.com/Andrew-Clegg'>Github</a>
      </h6>
      <main>
        <p> Summary goes here.</p>
        <div className='card-box'>
          <Card title="Skills" desc="Cards are reusable components great for layouts."></Card>
          <Card title="Education" desc="Cards are reusable components great for layouts."></Card>
          <Card title="Work Experience" desc="Cards are reusable components great for layouts."></Card>
          <Card title="Another Card" desc="Cards are reusable components great for layouts."></Card>
        </div>
      </main>
      <footer>
        <small>&copy; 2025</small>
      </footer>
    </div>
  );
}

export default App
