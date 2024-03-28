import React, {createContext, useState} from "react";
import {LRUCache} from 'lru-cache';

export const HistoryContext = createContext()

export default function HistoryProvider({children}) {
    const [history, setHistory] = useState(new LRUCache({max: 20}));


    return  <HistoryContext.Provider value={{ history: history, setHistory: setHistory }}>
        {children}
    </HistoryContext.Provider>
}