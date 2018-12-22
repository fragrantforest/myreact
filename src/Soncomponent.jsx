import React from 'react';
import ReactDOM from 'react-dom';

class Soncomponent extends React.Component{

    constructor(props){
        console.log('Soncomponent constructor');
        super(props);
        this.state = {
            count:1,
            isFirstLoading: true
        };
    }

    // componentWillMount(){
    //     console.log('Soncomponent componentWillMount');
    // }

    render(){
        console.log('Soncomponent render:' + this.state.isFirstLoading);
        return (
            <div>
                {this.props.children}
                <h1>Son count : {this.state.count}</h1>
            </div>
        );
    }

    // componentDidMount(){
    //     console.log('Soncomponent componentDidMount');
    // }

    componentWillReceiveProps(nextProps){
        console.log('Soncomponent componentWillReceiveProps:'+ this.state.isFirstLoading);
        this.setState({
            isFirstLoading : false
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Soncomponent shouldComponentUpdate');
        return true;
    }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('Soncomponent componentWillUpdate');
    // }

    // // // render()

    // componentDidUpdate(){
    //     console.log('Soncomponent componentDidUpdate');
    // }

    // componentWillUnmount(){
    //     console.log('Soncomponent componentWillUnmount');
    // }

}

export default Soncomponent;