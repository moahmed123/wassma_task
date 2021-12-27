import React, { useEffect } from 'react';
import localStorage from 'localStorage';
import { AccLogin } from './../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';


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
        <div className="App">
            <div className="App-header">           
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="username"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            placeholder="Enter Password "
                            name="password"
                        />
                    </label>                                     
                    <button type="submit">Submit</button>                                       
                </form>
            </div>
        </div>
    )
}

function mapStateToProps(state) {       
    return { 
        User_Login: state.default.UserLogin,        
    }
  }
export default connect(mapStateToProps)(Login);