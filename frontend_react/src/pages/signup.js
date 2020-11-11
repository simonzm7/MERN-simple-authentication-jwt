import React from 'react';
import '../styles/login.css'
import axios from 'axios';
import SuccessAlert from '../components/Animations/success';
import { Redirect } from 'react-router-dom';
class login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            msg: '',
            alertStatus: false,
            type: true,
            Redirect: '',
            RedirectBool: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disableAlert = this.disableAlert.bind(this);
    }
    handleChange(e)
    {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }
    async handleSubmit(e)
    {
        e.preventDefault();

       try{
        const res =  await axios.post('http://localhost:4000/api/user/signup', {
            email: this.state.email,
            password: this.state.password
        });
        const { msgType, msg} = res.data;
        this.enableAlert(msgType, msg);
        if(msgType){
            this.setState({...this.state, Redirect: '/login', RedirectBool: true});
        }

       }catch(err){
           console.log('error to send post request: ', err);
       }
    }
    enableAlert(type, msg)
    {
       this.setState({...this.state, alertStatus: true, type: type, msg: msg});
    }
    disableAlert()
    {
        this.setState({...this.state, alertStatus: false});
    }
    RedirectTo()
    {
        if(this.state.RedirectBool)
        {
            return <Redirect to={this.state.Redirect}/>
        }
    }
    render()
    {
        return(
            <div className="container" style={{width: '100%', height: '100%', position: "relative"}}>
                {this.RedirectTo()}
                <SuccessAlert aState={{status: this.state.alertStatus, disable: this.disableAlert, type: this.state.type, msg: this.state.msg}}/>
            <div className="loginContainer">
                <div className="spacer"></div>
                <h3 style={{marginBottom: 20}}>Sign Up</h3>
                <label style={{marginBottom: 5, display: 'block'}}>
                    <span style={{color: '#4443D'}}>
                        <div>Email</div>
                    </span>
                </label>
                <form onSubmit={this.handleSubmit}>
                <input type="text"
                 style={styles.input}
                 name="email"
                 value={this.state.email} 
                 onChange={this.handleChange}
               >
                 </input>

                <label style={{marginTop: 5, marginBottom: 5, display: 'block'}}>
                    <span style={{color: '#4443D'}}>
                        <div>Password</div>
                    </span>
                </label>

                <input type="password" style={styles.input} name="password" value={this.state.password} onChange={this.handleChange}></input>
                
                <div style={{margin: '10px 0'}}>
                    <input type="submit" style={styles.btn} value="Sign Up"/>
                </div>
                </form>
            </div>
            </div>
        );
    }
}

const styles = {
    input: {
        outline: 'none',
        border: '1px solid #D8D8D8',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        color: 'rgba(0, 0, 32, 0.8)',
        width: '100%'
    },
    btn: {
        border: 'none',
        width: '100%',
        fontSize: 16,
        padding: 10,
        borderRadius: 5,
        background: '#0066FF',
        color: '#fff',
        cursor: 'pointer',
        textAlign: 'center',
        userSelect: 'none',
        outline: 'none'
    }
}

export default login;