import React from 'react';
import { Link } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            links:[
                'favorites',
                'settings',
                'goodideas'
            ],
            title: 'Welcome!'
        };
    }
    changeTitle(title){
        this.setState({title});
    }
    render(){
        const { location } = this.props;
        return(
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} location={location} links={this.state.links}/>
                <div class='container'>{this.props.children}</div>
            </div>
        );
    }
}