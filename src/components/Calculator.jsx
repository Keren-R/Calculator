import React, {useContext, useState} from "react";
import { evaluate } from 'mathjs';
import Layout from "./Layout";
import {HistoryContext} from '../context/Operations.context';
import "../styles/Calculator.css"

export default function Calculator() {

    const [display, setDisplay] = useState('0');
    const { history} = useContext(HistoryContext);
    function handleClick(value) {
        if (display === '') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
        updateHistory(value)
    }

    function updateHistory(value) {
        history.set(new Date(), value);
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
                    return <button onClick={() => handleClick(num)} type="button">{num}</button>
                }))}

                {React.Children.toArray(ops.map((op) => {
                    return <button className="ops-buttons" onClick={() => handleClick(op)} type="button">{op}</button>
                }))}

            <button style={{"background": "green"}} type="button" onClick={handleCalculation}>=</button>
            <button style={{"background": "orange"}} type="button" onClick={handleClear}>C</button>

            </div>

        </div>
        </Layout>
    );
}