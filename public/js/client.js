import React from 'react';
import ReactDom from 'react-dom';
import CheckingAuthData from './pages/CheckingAuthData';
class App extends React.Component{
    render(){
        return(
            <h1>Eat this!</h1>,
            <CheckingAuthData />
        )
    }
}
const app = document.getElementById('app');
ReactDom.render(<App />, app);