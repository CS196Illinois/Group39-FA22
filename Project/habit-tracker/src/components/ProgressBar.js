import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


const ProgressBar = (props) => {
    const { completed } = props;

    const containerStyles = {
        //marginLeft: '2000px',
        height: '20px',
        width: "70%",
        backgroundColor: "#c8c8c8",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#234a30",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        //padding: 2,
        margin: 5,
        color: 'white',
        fontWeight: 'bold'
    }


    return (
        <div className="habitProgressBar" style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
        /*
        const prevCountRef = useRef(0); // initialize the prev value

<button onClick={() => setCount((count) => { 
  prevCountRef.current = count; // update the prev value
  return count + 1;
})}>Increment</button>
https://stackoverflow.com/questions/71501917/react-how-to-keep-track-of-the-previous-state
    */
    );
};

export default ProgressBar;