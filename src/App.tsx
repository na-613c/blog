import React, { useReducer } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { initialState } from './initialState'
import { reducer } from './reducer'


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HashRouter>
      <div className="App">
        <AppRouter state={state} addPost={dispatch}/>
      </div>
    </HashRouter>
  );
};

export default App;
