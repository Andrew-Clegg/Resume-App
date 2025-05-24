import React from 'react';
import Card from './Card';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  return (
    // Show Resume Page
    <div>
 

      <main>
        <p className="text-5xl font-bold">Andrew Clegg</p> 
        <p className="text-2xl font-semibold">Computer Science Undergraduate</p>

        <div className='flex gap-10'>
          <p>Oshawa, ON, Canada</p> | 
          <p>Tele:</p> |
          <p>@</p> |
          <a href='https://linkedin.com/in/andrew-clegg-tech'><FontAwesomeIcon icon={faCoffee} /> LinkedIn</a> |

          <a href='https://github.com/Andrew-Clegg'>Github</a>
        </div>
        <div className='flex gap-3'>
          <p className='font-bold'>Objective:</p>
          <p>Summary goes here.</p>
        </div>
        <div className='grid grid-cols-3'>
          <Card title="Skills" subtitle='Highlights of Qualifications' desc="Cards are reusable components great for layouts."></Card>
          <Card title="Education" subtitle='Ontario Tech University' desc="Cards are reusable components great for layouts."></Card>
          <Card title="Work Experience" subtitle='Ontario Public Service' desc="Cards are reusable components great for layouts."></Card>
          <Card title="Another Card" subtitle='' desc="Cards are reusable components great for layouts."></Card>
        </div>
      </main>
      <footer>
        <small>&copy; 2025</small>
      </footer>
    </div>
  );
}

export default App
