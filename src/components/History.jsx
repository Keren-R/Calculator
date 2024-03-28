import React, {useContext, useState} from "react";
import Layout from "./Layout";
import {HistoryContext} from "../context/History.context";
export default function History() {
    const { history , clearHistory} = useContext(HistoryContext);
    const [historyCleared, setHistoryCleared] = useState(false);

    function handleClearHistory(){
        clearHistory()
        setHistoryCleared(() => !historyCleared);
    }

    return(
        <Layout>
            <div className="history-display">
                <h3>History</h3>
                <ol>
                    {Array.from(history.keys()).map((item) => (
                        <li>{history.get(item)}</li>
                    ))}
                </ol>
            </div>
            <button type="button" onClick={handleClearHistory}>Clear History</button>
        </ Layout>
    );
}