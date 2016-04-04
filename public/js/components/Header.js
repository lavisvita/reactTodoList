import React from 'react';
import { IndexLink, Link } from 'react-router';
import Title from './Title';
export default class Header extends React.Component{
    handleTitle(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        const { location } = this.props;
        const main = location.pathname === '/' ? 'active': '';
        return(
            <div class='container'>
                <header>
                    <nav location={location} class='navbar navbar-inverse nabar-fixed-top' role='navigation'>
                        <ul class='nav navbar-nav'>
                            <li class={main}>
                                <IndexLink to='/'>Todos</IndexLink></li>
                            {this.props.links.map(function(elem, index){
                                return <li key={index}>
                                            <Link to={elem}>
                                                {elem}
                                            </Link>
                                        </li>;
                            })
                            }
                        </ul>
                    </nav>
                    <Title title={this.props.title}/>
                    <p>Change title dynamiclly</p>
                    <input value={this.props.title} onChange={this.handleTitle.bind(this)}/>
                </header>
            </div>
        );
    }
}
