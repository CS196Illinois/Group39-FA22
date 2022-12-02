import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Record = (props) => (
    <tr>
        <td>{props.record.habit}</td>
        <td>{props.record.goal}</td>
        {/*<p>Test: {props.record.habit}</p>*/}
        <p>Test: {props.record.goal}</p>
    </tr>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);

    // fetch records from database
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:8080/record/`);

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            console.log(records);
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);

    // map records on a table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    key={record._id}
                />
            );
        });
    }

    // dusplay table with records of each habit
    return (
        <div>
            <h3>Record List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Habit</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}