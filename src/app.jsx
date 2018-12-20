 import React from 'react';
 import ReactDOM from 'react-dom';
//  import 'font-awesome/css/font-awesome.min.css'
//  import './index.css';
//  import './index.scss';
 import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';

 class A extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div>
        Component A
        <Switch>
         <Route path={`${this.props.match.path}/sub`} render={()=>{
            return <div>当前组件是SUB</div>
          }}/>
         <Route path={`${this.props.match.path}/:id`} render={(route)=>{
            return <div>当前组件是A，参数是：{route.match.params.id}</div>
          }}/>
          <Route exact path={this.props.match.path} render={()=>{
            return <div>当前组件是A，不带参数</div>
          }}/>
        </Switch>
      </div>
    );
  } 
}

 class B extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div>
        Component B
      </div>
    );
  } 
}

 class Wrapper extends React.Component{
      // constructor(props){
      //   super(props);
      // }
      render(){
        return (
          <div>
            <Link to="/a">组件A</Link>
            <br/>
            <Link to="/a/123">带参数组件A</Link>
            <br/>
            <Link to="/a/sub">a/sub</Link>
            <br/>
            <Link to="/b">组件B</Link>
            {this.props.children}
          </div>
        );
      } 
 }


 ReactDOM.render(
   <Router>
      <Wrapper>
        <Route path="/a" component={A}/>
        <Route path="/b" component={B}/>
      </Wrapper>
   </Router>
,
  document.getElementById('app')
);





