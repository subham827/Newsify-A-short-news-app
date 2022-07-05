
import './App.css';


import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
// import react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from 'react-scroll-to-top';


export default class App extends Component {
  c = 'John'
  state = {
    progress: 0,
    mode: 'light',
    text: 'black',
    nottext: 'white'
  }
  
  
  setProgress = (progress) =>{
    this.setState({
      progress: progress 
    })
  }
  toggleMode = () => {
    if (this.state.mode === 'light') {
      
      
      
      this.setState({
        mode: 'dark',
        
        text: 'white',
        nottext: 'black'
      })
      document.body.style.backgroundColor = 'black';
    }
    else{
      this.setState({
        mode: 'light',
        text: 'black',
        nottext: 'white'
      })
      document.body.style.backgroundColor = 'white';
    }

  }

  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>

       <Navbar toggleMode = {this.toggleMode} mode = {this.state.mode} ></Navbar>
       <LoadingBar color='green' progress={this.state.progress} />
       <Switch> 
          <Route exact path='/' ><News  setProgress={this.setProgress} key="general"  category = "general" text={this.state.text} nottext={this.state.nottext} ></News></Route>
          <Route exact path='/science' ><News  setProgress={this.setProgress}key="science" category = "science" title="science"  text={this.state.text} nottext={this.state.nottext}></News></Route>
          <Route exact path='/business' ><News setProgress={this.setProgress} key="business" category = "business" title="business" text={this.state.text} nottext={this.state.nottext}></News></Route>
          <Route exact path='/sports' ><News setProgress={this.setProgress} key="sports" category = "sports" title="sports" text={this.state.text} nottext={this.state.nottext}></News></Route>
          <Route exact path='/entertainment' ><News setProgress={this.setProgress} key="entertainment" category = "entertainment" title="entertainment" text={this.state.text} nottext={this.state.nottext}></News></Route>
          <Route exact path='/health' ><News  setProgress={this.setProgress}key="health" category = "health" title="health" text={this.state.text} nottext={this.state.nottext}></News></Route>

       </Switch>
       </Router>
       <ScrollToTop smooth color="#6f00ff" />
       
      </div>
    )
  }
}

