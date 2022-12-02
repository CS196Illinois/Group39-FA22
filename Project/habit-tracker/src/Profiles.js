import React from 'react';

export default function profiles({Leaderboard}) {
  return (
    <div id= "profile">
      {Item(Leaderboard)}
    </div>
  )
}

function Item(data) {
  return(

    <>
      {
        data.map((value, index) => (
          <div className="flex" key={index}> 
            <div className="item">
              <img src={value.image} alt="" />

              <div className="info">
                <h3 className='name text-dark'>{values.name}</h3>
                <span>{value.activity}</span>
            </div>
          </div>
          <div className="item">
              <span>{value.days}</span>
          </div>
        </div>
         )
        )
      }
    </> 
  )
}