import { createContext, useContext } from "react";

export type TabContextType = {
    tab: ('projects'|'blog');
    setTab: (tab: ('projects'|'blog')) => void;
}

export const TabContext = createContext<TabContextType>({ 
    tab: 'projects', 
    setTab: (_) => {
        console.warn('No state provider')
    }
});

export const useTabContext = () => useContext(TabContext);