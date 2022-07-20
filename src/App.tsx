import React from 'react';
import './App.scss';
import PostContainer from './components/PostContainer/PostContainer';

function App() {

  return (
    <>
      <div className='App' />
      <div className="container">
        <h2>Redux-toolkit + RTK Query</h2>
        <PostContainer />
      </div>
    </>
  );
}

export default App;
