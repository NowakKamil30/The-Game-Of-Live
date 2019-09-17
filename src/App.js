import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import TopMenu from "./components/TopMenu";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss"

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="App">
        <Header/>
        <TopMenu/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
