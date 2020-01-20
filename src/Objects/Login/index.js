import React from 'react';
import './styles.css';


class Login extends React.Component {    
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
    
    render(){
        return(
    <div>
        <label className="name-form">Nome</label>
            <input className="input-form" type="text" name="name" placeholder="Digite aqui" value={this.state.value} required/>
            <button className="button-form" onClick={teste} onChange={this.myChangeHandler}>Login</button> 
    </div>
        );
}
}
function teste() {
    alert("teste");
}


export default Login;