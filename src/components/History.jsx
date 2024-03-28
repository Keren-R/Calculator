import React, {useContext, useState} from "react";
import Layout from "./Layout";
import {HistoryContext} from "../context/Operations.context";
export default function History() {
    const { history } = useContext(HistoryContext);
    const [historyCleared, setHistoryCleared] = useState(false);

    function handleClearHistory(){
        history.clear();
        setHistoryCleared(true);
    }

    if (historyCleared) {
        setHistoryCleared(false);
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