import react, { Component } from "react";

import './sing-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils'; 


class SingIn extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event =>{
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });

  }

  render(){
    return(
      <div className="sing-in">
        <h2> I alredy have an account </h2>
        <span> Entre com seu email e senha </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            label='Email'
            required
          />
          
          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            label='Password'
            required
          />

          <CustomButton type='submit' > Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} >Login with Google</CustomButton>
        </form>

      </div>
    )
  }
}

export default SingIn;
