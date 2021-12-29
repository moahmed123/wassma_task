import React, { useEffect } from 'react';
import localStorage from 'localStorage';
import { AccLogin } from './../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './login.css';

function Login(props) {        
    let navigate = useNavigate();
    useEffect(() => {        
        let StorgeData = localStorage.getItem('Login');
        let Data = JSON.parse(StorgeData);  
        console.log(props.User_Login, Data)
        if(props.User_Login == true || Data.User == 'Login' ){
            console.log(props.User_Login, 'props.Login_user');            
            navigate('/');
        }
    })
    
    // Function Handle Submit Form.
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(e.target.username.value);
        // console.log(e.target.password.value); 

        let username = e.target.username.value,
            Password = e.target.password.value;
        props.dispatch(AccLogin.AccessLogin(username, Password));     
         // console.log(Data, Data.permission);                      
        
    }
    
    return (
        <section className="login_page">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>           
                        <form onSubmit={handleSubmit}>
                            <div className='col-12'>
                                <label>
                                    Name:                                
                                </label>
                                <input type="text" name="username" placeholder="Enter Name" />
                            </div>
                            <div className='col-12'>
                                <label>
                                    Password:                                    
                                </label>
                                <input type="password" placeholder="Enter Password " name="password" />                                
                            </div>                                                        
                            <Button type="submit">Submit</Button>                                       
                        </form>
                    </div>
                </div>
            </div>            
        </section>
    )
}

function mapStateToProps(state) {       
    return { 
        User_Login: state.default.UserLogin,        
    }
  }
export default connect(mapStateToProps)(Login);