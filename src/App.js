import React,{Component} from 'react';
import {connect} from "react-redux";
import {showTopMenu,screenSize}from "./action/index"
import TopMenu from "./components/TopMenu";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss"

class App extends Component {
  showTopMenu=(e)=>
  {
      this.props.showTopMenu(e.clientY);
  }
  componentDidMount()
  {
    document.addEventListener("mousemove",this.showTopMenu);
    this.props.screenSize(window.innerWidth);
  }
  componentWillUnmount()
  {
    document.removeEventListener("mousemove",this.showTopMenu);
  }

  render(){
      return (
          <div className="App">
              <Header/>
              <TopMenu/>
              <Main/>
              <Footer/>
          </div>
      );
  }
}
const mapStateToProps=state=>{
  return{
    show: state.showMenu.showTopMenu
  }
}
export default connect(mapStateToProps,{showTopMenu,screenSize})(App);
