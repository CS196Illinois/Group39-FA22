import React, { useState, useEffect } from 'react';
import { Container } from './components/Container.js'
import ProgressBar from './components/ProgressBar.js'


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
  );
}

export default App;