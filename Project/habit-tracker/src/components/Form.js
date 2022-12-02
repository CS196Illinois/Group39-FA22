import React from 'react';
import { useState } from "react";


export default function Form() {
    const [form, setForm] = useState({
        habit: "",
        goal: "",
        days: 0,
    });

    // update state properties
    function updateForm(value) {
        //console.log(value);
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // handle submission
    async function onSubmit(e) {
        e.preventDefault();
        // add new record to database
        const newHabit = { ...form };
        //console.log(JSON.stringify(newHabit));
        const body = JSON.stringify(newHabit);
        const bodyParse = JSON.parse(body);
        console.log(body);
        //console.log("Test: " + bodyParse.habit);
        await fetch("http://localhost:8080/record/add/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newHabit),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ habit: "", goal: "" });
        //setForm({ goal: "" })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h3 className="headerText">New Habit</h3>
                </div>
                <div className="center">
                    <input 
                        type="text"
                        id="habit"
                        placeholder="Habit Name"
                        value={form.habit}
                        onChange={(e) => updateForm({ habit: e.target.value })}
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        id="goal"
                        placeholder="Goal Streak"
                        value={form.goal}
                        onChange={(e) => updateForm({ goal: e.target.value })}
                    />
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}

