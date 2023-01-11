import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import { useAppSelector } from './hooks/storeHook';


function App() {
  const { darkTheme } = useAppSelector((RootState) => RootState);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-red-900 dark:text-white mih-h-screen px-4 lg:px-12 pb-20">
        <Header />
      </div>
    </div>
  );
}

export default App;
