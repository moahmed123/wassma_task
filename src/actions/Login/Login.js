import axios from 'axios';
import localStorage from 'localStorage';
// TODO: Fun Validation For Value. 


// check For API To access Login.
export const AccessLogin = (Username, Password) => (dispatch) => {    

    let LoginURL = 'http://localhost:3004/login'; // TODO: add URL on env && Valid API Request 

    axios.get(LoginURL, {
        params: {
            username: Username
        }
    })
    .then(function (response) {        
        // handle success              
        console.log("response", response, response.data[0].password,'--->', Password);
        //TODO: Working FOr Validation for User Login .
        if (response.data[0].password == Password){
            // Check Permission. 
            console.log('true');
            let user_data = { User: 'Login', permission: response.data[0].permission };
            localStorage.setItem('Login', JSON.stringify(user_data));   
            
            dispatch(UserLogin(true));

        }else{
            console.log('not corrected ');            
        }
    })
    .catch(function (error) {
       // handle error
        console.log(error);
    });
}

export const UserLogin = (Login) => {
    return {
        type: 'LOGIN_USER',
        Login
    };
};

