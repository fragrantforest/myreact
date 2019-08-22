 import React from 'react';
 import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom';
 import history from './history'

 class A extends React.Component{
  componentDidMount() {
    console.log('A componentDidMount');
}

componentWillReceiveProps(nextProps){
    console.log('A componentWillReceiveProps');
}


componentWillUpdate(nextProps, nextState){
    console.log('A componentWillUpdate');
}

componentDidUpdate(){
    console.log('A componentDidUpdate');
}

componentWillUnmount(){
    console.log('A componentWillUnmount');
}
  render(){
    console.log('A render');
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

  componentDidMount() {
    console.log('B componentDidMount');
}

componentWillReceiveProps(nextProps){
    console.log('B componentWillReceiveProps');
}


componentWillUpdate(nextProps, nextState){
    console.log('B componentWillUpdate');
}

componentDidUpdate(){
    console.log('B componentDidUpdate');
}

componentWillUnmount(){
    console.log('B componentWillUnmount');
}

  constructor(props){
    super(props);
    this.state = {
      id:573
    };
  }
  render(){
    console.log('B render');
    return (
      <div>
        Component B
        {this.state.id}
      </div>
    );
  } 
}

 class Wrapper extends React.Component{
    componentDidMount() {
        console.log('Wrapper componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('Wrapper componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('Wrapper shouldComponentUpdate');
      return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Wrapper componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('Wrapper componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('Wrapper componentWillUnmount');
    }
      render(){
        console.log('Wrapper render');
        return (
            <div>
                {this.props.children}
            </div>
        );
      } 
 }


 //当点击页面上的路由时，react采用history进行pushstate改变路由，然后从根开始便利
 //更新页面内容
 //根据路由的变化，对相应的部件进行更新，父组件更新的过程中可能就导致了某个路由不匹配当前路由的子组件卸载，
 //而路由匹配当前路径的子组件就重新挂载。
 //特别注意，发生点击的组件的父组件(即发生操作的组件)会被依次调用shouldComponentUpdate、componentWillUpdate
 //所以 Wrapper会被调用shouldComponentUpdate、componentWillUpdate，因为点击它的子组件Link时，就是在操作它
 //这就表明在props和state都不改变的情况下，发生路由操作的组件，也依然会被react主动调用shouldComponentUpdate

 class RouterMain extends React.Component{

    componentDidMount() {
        console.log('RouterMain componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('RouterMain componentWillReceiveProps');
    }


    componentWillUpdate(nextProps, nextState){
        console.log('RouterMain componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('RouterMain componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('RouterMain componentWillUnmount');
    }

   render(){
    console.log('RouterMain render');
     return (
      <Router>
       <Wrapper>
            <Link to="/a">组件A</Link>
            <br/>
            <Link to="/a/123">带参数组件A</Link>
            <br/>
            <Link to="/a/sub">a/sub</Link>
            <br/>
            <Link to="/b">组件B</Link>
            <Switch>
                  <Route path="/a" render={route => {
                    return <A {...route}/>
                  }}/>
                  <Route path="/b" render={route => {
                    return <B {...route}/>
                  }}/>
                  <Route path="/c" render={(route)=>{
                    return <B id="c"/>
                  }}/>
                  <Route path="/" component={A}/>
            </Switch>
       </Wrapper>
       </Router>
     )
   }
 }

 export default RouterMain


