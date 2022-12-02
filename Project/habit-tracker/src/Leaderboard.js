import React from 'react';
import Profiles from './Profiles';
import { LeaderboardData} from './profile-data.json';

export default function Leaderboard() {

  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <div className="Leaderboard">

      <div className="Add Friend">
        <button onClick={handleClick} data-id='0'>Add Friend</button>
      </div>  
      <Profiles Leaderboard={LeaderboardData}></Profiles>
    </div>
  )
}























/*
function BottomLeftBox() {
  return (
    <div className="LeaderBoard">
      <h1> React Material UI | Layout | Box </h1>
      <Box component="span" clone style= {{color: 'green'}}>
        <Button> add friends </Button>
      </Box>
    </div>
  );
}
export default BottomLeftBox;


master lambda npm start 
export defualt function LeaderBoard() {
  const[LeaderBoard] = useState ([
    {text: 'Samantha' : {32} : 'days', key: '1'}
    {text: 'George' : {28} : 'days', key: '2'}
    {text: 'Samantha' : {32} : 'days', key: '3'}
    {text: 'Frank' : {19} : 'days', key: '4'}
    {text: 'Henry' : {30} : 'days', key: '5'}
    {text: 'Maria' : {23} : 'days', key: '6'}
  ]);
  return (
    <div> 
      <button>  data-id= '7' </button>
      <Profiles> </Profiles>
    </div>
  )
}
*/