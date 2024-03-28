import React, {createContext, useState} from "react";
import {LRUCache} from 'lru-cache';

export const HistoryContext = createContext()

export default function HistoryProvider({children}) {
    const [history] = useState(new LRUCache({max: 20}));

    function updateHistory(value) {
        history.set(new Date(), value)
    }

    function clearHistory() {
        history.clear()
    }


    return  <HistoryContext.Provider value={{ history: history, updateHistory: updateHistory , clearHistory: clearHistory}}>
        {children}
    </HistoryContext.Provider>
}