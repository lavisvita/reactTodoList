import React from 'react';

export default class Todo extends React.Component{
    render(){
        const text = this.props.text;
        return(
            <div>
                {text}
            </div>
        );
    }
}