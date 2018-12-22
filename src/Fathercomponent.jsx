import React from 'react';
import Son from './Soncomponent.jsx';

/* 生命周期函数调用过程
   Fathercomponent componentWillMount
   Soncomponent componentWillMount
   Soncomponent componentDidMount
   Fathercomponent componentDidMount 
   */

class Fathercomponent extends React.Component{

    constructor(props){
        console.log('Fathercomponent constructor');
        super(props);
        this.state = {
            name : 'lpf',
            count:1
        };
    }

    // componentWillMount(){
    //     console.log('Fathercomponent componentWillMount');
    // }

    render(){
        console.log('Fathercomponent render');
        // setTimeout(() => {
        //     console.log(this.state.count);
        //     this.setState(
        //         (prevState, props) => ({
        //             count: prevState.count + 1
        //         })
        //     );
        // }, 2000);
        return (
           <Son>
               <h1>father count1 :{this.state.name}</h1>
               <button onClick={()=>{this.onClick()}}>测试点击</button>
           </Son>
        );
    }

    
    onClick(){
        console.log('Fathercomponent onClick');
        this.setState({name : "lpf test"});
    }

    // componentDidMount(){
    //     console.log('Fathercomponent componentDidMount');
    // }

    // componentWillReceiveProps(nextProps){
    //     console.log('Fathercomponent componentWillReceiveProps');
    // }

    // //这个函数如果返回false的话，则不会调用render函数重新渲染
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Fathercomponent shouldComponentUpdate');
    //     return true;
    // }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('Fathercomponent componentWillUpdate');
    // }

    // // // render()

    // componentDidUpdate(){
    //     console.log('Fathercomponent componentDidUpdate');
    // }

    // componentWillUnmount(){
    //     console.log('Fathercomponent componentWillUnmount');
    // }
}

export default Fathercomponent;