import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo.js';
import Vector from './components/Vector';
import v2 from './imgs/Vector 2.png';
import v3 from './imgs/Vector 3.png';
import v4 from './imgs/Vector 4.png';
import v5 from './imgs/Vector 5 (6).png'; // Vector 6 in the Figma design
import './index.css';

function App() {
  // Idk how to use this yet
  const user = (str = 'Guest') => {
    return str;
  }

  return (

    <div className="Container">
      <div className='page'> {/* vector stuff */}
        <Vector id='V2' file={v2} alt={'v2'} />
        <Vector id='V3' file={v3} alt={'v3'} />
        <Vector id='V3-2' file={v3} alt={'v3-2'} />
        <Vector id='V4' file={v4} alt={'v4'} />
        <Vector id='V5' file={v5} alt={'v5'}/>
      </div>
      <div className='page'>
        <Header title={'Habit Tracker'} />
        <HeaderTwo text={'Welcome'} name={user('Developer')} /> {/* IDK what I'm doing with this component yet */}
      </div>
    </div>

  );
}

export default App;