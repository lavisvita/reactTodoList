import React from 'react';

export default class CheckingAuthData extends React.Component{
    constructor() {
        super();
        this.state = {
            password: '',
        }
    }

    typePass(e){
        var password = e.target.value;
        this.setState({password: password});
    }
    render(){
        var password = this.state.password;
        if(password == ''){
            return(
                <div>
                    <h3>Checking password...</h3>
                    <input value={this.state.password}
                           onChange={this.typePass.bind(this)} />
                    <p>It's empty, man! Please, type something...</p>
                </div>
            );
        }else if(password.length <= 3){
            return(
                <div>
                    <h3>Checking password...</h3>
                    <input value={this.state.password}
                           onChange={this.typePass.bind(this)} />
                    <p>It's very short, man! Please, type More...</p>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h3>Password checked! It's good, man! :)</h3>
                    <input value={this.state.password}
                           onChange={this.typePass.bind(this)} />
                    <p>Ok! Pass is good! BUT!!! Don't type any garbage... Please!</p>
                </div>
            );
        }
    }
}