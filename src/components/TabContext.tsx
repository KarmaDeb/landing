import { createContext, useContext } from "react";

export type TabContextType = {
    tab: string;
    setTab: (tab: string) => void;
}

export const TabContext = createContext<TabContextType>({ 
    tab: 'projects', 
    setTab: (_) => {
        console.warn('No state provider')
    }
});

export const useTabContext = () => useContext(TabContext);