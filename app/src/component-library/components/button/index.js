import React, {Component} from 'react';
import style from  './style.scss';
// import { Button } from '@material-ui/core';

 
class Button extends Component{
    constructor(props){
        super(props)
        this.state={
            default_class:this.props.btn_type,
            text:"Secondary"
        }

    }
    
    onHandleClick = (text) =>{
        this.setState({default_class:"Primary_Class"})
        this.setState({text});
        
       
    }
    
    render(){
        const {text} =this.state;

        return(
            <button onClick ={ () =>{this.onHandleClick("Primary")}} className={this.state.default_class}>{this.state.text}</button>
        );
    }
}

export default Button;



