import React, { useState, useEffect } from 'react';
import { Container } from './components/Container.js'
import ProgressBar from './components/ProgressBar.js'
import Header from './components/Header';
//import HeaderTwo from './components/HeaderTwo.js';
import Vector from './components/Vector';
import v2 from './imgs/Vector 2.png';
import v3 from './imgs/Vector 3.png';
import v4 from './imgs/Vector 4.png';
import v5 from './imgs/Vector 5 (6).png'; // Vector 6 in the Figma design
import './index.css';


/*
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
</style>
*/
const App = () =>  {
  const [data, setData] = useState([]);
  const getData=()=> {
    fetch('http://localhost:8080/record', 
    {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(function(response) {
     console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }
  useEffect(() => {
    getData()
  }, [])
  
  const triggerText = 'Add Habit';

  return (
    <div className="App">
       <div className="Container">
        <Header title={'Habit Tracker'} />
          {/*<HeaderTwo text={'Welcome'} name={user('Developer')} /> {/* IDK what I'm doing with this component yet */}
        <div className='page'> {/* vector stuff */}
        <Vector id='V2' file={v2} alt={'v2'} />
        <Vector id='V3' file={v3} alt={'v3'} />
        <Vector id='V3-2' file={v3} alt={'v3-2'} />
        <Vector id='V4' file={v4} alt={'v4'} />
        <Vector id='V5' file={v5} alt={'v5'}/>
        </div>
        <div className="addHabit">
        <div className="currentStreak">
          <h1 className="textHeader">10</h1>
          <h2 className="text">Day Streak</h2>
        </div>
        <div className="habitTracker">
          <div className="habitProgressBar">
            {
              data.map((item, idx)=><ProgressBar key={idx} completed={item.completedDays} />)
            }
          </div>
          <Container triggerText={triggerText} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;