import React, {useContext, useState} from "react";
import { evaluate } from 'mathjs';
import Layout from "./Layout";
import {HistoryContext} from '../context/History.context';
import "../styles/Calculator.css"

export default function Calculator() {

    const [display, setDisplay] = useState('');
    const { updateHistory } = useContext(HistoryContext);

    function handleClick(event) {
        let value = event.target.innerText
        if (display === '') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
        updateHistory(value)
    }

    function handleClear() {
        setDisplay('')
    }

    function handleCalculation(event) {
        try {
            const result = evaluate(display);
            setDisplay(result.toString());
            } catch (error) {
                // Handle errors, such as division by zero
                setDisplay('Error');
            }
            updateHistory(event.target.innerText)
    }

    const numbers= ["1","2","3","4","5","6","7", "8","9", "0"]
    const ops = ["-", "+", "/", "*", "."]

    return (
        <Layout>
        <div className="calculator-console">

            <div className="display">{display || '0'}</div>
            <div className="buttons">
                {React.Children.toArray(numbers.map((num) => {
                    return <button onClick={handleClick} type="button">{num}</button>
                }))}

                {React.Children.toArray(ops.map((op) => {
                    return <button className="ops-buttons" onClick={handleClick} type="button">{op}</button>
                }))}

            <button id="equal-button" type="button" onClick={handleCalculation}>=</button>
            <button id="clear-button" type="button" onClick={handleClear}>C</button>

            </div>

        </div>
        </Layout>
    );
}