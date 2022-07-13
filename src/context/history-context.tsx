import React, {useEffect, useState} from 'react';

type HistoryContextObj = {
  items: {
    name: string,
    date: string
  }[];
  activeSearch: {
    get: string,
    set: (name: string) => void
  }
  addHistory: (name: string) => void;
};

export const HistoryContext = React.createContext<HistoryContextObj>({
  items: [],
  addHistory: () => {
  },
  activeSearch: {
    get: '',
    set: () => {
    },
  }
});

const initial = JSON.parse(localStorage.getItem('history') || '[]');


const HistoryContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [history, setHistory] = useState<{
    name: string,
    date: string
  }[]>(initial);
  const [activeSearch, setActiveSearch] = useState('');

  const addHistoryHandler = (Username: string) => {
    const newHistory = {
      name: Username,
      date: new Date().toJSON().slice(0, 10)
    };
    let currHistory = [...history];
    currHistory.unshift(newHistory);
    setHistory(currHistory);
  };

  const contextValue: HistoryContextObj = {
    items: history,
    addHistory: addHistoryHandler,
    activeSearch: {
      get: activeSearch,
      set: setActiveSearch
    }
  };

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  return (
    <HistoryContext.Provider value={contextValue}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;