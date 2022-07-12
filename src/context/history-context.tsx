import React, {useEffect, useState} from 'react';

type HistoryContextObj = {
  items: {
    name: string,
    date: string
  }[];
  addHistory: (text: string) => void;
};

export const HistoryContext = React.createContext<HistoryContextObj>({
  items: [],
  addHistory: () => {
  },
});

const initial = JSON.parse(localStorage.getItem('history') || '[]');


const HistoryContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [history, setHistory] = useState<{
    name: string,
    date: string
  }[]>(initial);

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