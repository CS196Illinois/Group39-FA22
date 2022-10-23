import Header from './components/Header'
import Vector from './components/Vector';
import v2 from './imgs/Vector 2.png';
import v3 from './imgs/Vector 3.png';
import v4 from './imgs/Vector 4.png';
import v5 from './imgs/Vector 5.png';
import v6 from './imgs/Vector 6.png';
import './index.css'

function App() {
  // Idk how to use this yet
  const user = (str = 'Guest') => {
    return user;
  }





  return (





    
    <div className="Container">
        <div> {/* vector stuff */}
          <Vector id='V2' file={v2} alt={'v2'} />
          <Vector id='V3' file={v3} alt={'v3'} />
          <Vector id='V4' file={v4} alt={'v4'} />
          <Vector id='V5' file={v5} alt={'v5'}/>
          <Vector id='V6' file={v6} alt={'v6'} />
        </div>


        <Header title={'Habit Tracker'} />
        <h2>Welcome {'Developer'}</h2> {/* should make into component */}
    </div>
  );
}

export default App;