import Header from './components/Header'
import Vector from './components/Vector';

function App() {
  // Idk how to use this yet
  const user = (str = 'Guest') => {
    return user;
  }

  return (

    <div className="Container">
        <div> {/* vector stuff */}
          <Vector id='V2' file={'Project\habit-tracker\public\Vector 2.png'} />
          <Vector id='V3' file={'Project\habit-tracker\public\Vector 3.png'} />
          <Vector id='V4' file={'Project\habit-tracker\public\Vector 4.png'} />
          <Vector id='V5' file={'Project\habit-tracker\public\Vector 5.png'} />
          <Vector id='V6' file={'Project\habit-tracker\public\Vector 6.png'} />
        </div>

        <Header title={'Habit Tracker'} />
        <h2>Welcome {'Savior'}</h2> {/* should make into component */}

/* Clement's part on components 4 */
        <div id= "streaks">
          <div id= "secondInnerBox">
            <div class = "circle"></div>
            <p id = "subtitleup">Highest Streak</p>
            <div id = "rectangularbox">
              //unimplemeted
            </div>
            <div id = "smallgreenrect"></div>
            <div id = "rewardbutton1"></div>
            <div id = "rewardbutton2"></div>
            <div id = "rewardbutton3"></div>
          </div>
        </div>
    </div>

    
  );
}

export default App;