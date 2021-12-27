import React, {useEffect, useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Products from './component/Products/Products';
import Categories from './component/Categories/Categories';
import { useNavigate } from 'react-router-dom';
import { AccLogin, GetPros } from './actions';

function App(props) {    
    const [permission, setPermission] = useState('');
    let navigate = useNavigate();    

    useEffect(() => {   
        //set update÷
        props.dispatch(GetPros.EditPro(false));
        let StorgeData = localStorage.getItem('Login');
        let Data = JSON.parse(StorgeData);
        // console.log(Data);   
        if(Data){
            if(Data.User){
                console.log("Data.Login", Data.permission, Data.User);
                setPermission(Data.permission)
            }else{
                console.log("Not", Data.User);
                navigate('/Login');
            }        
        }      
        
    },[]);  

  return (
    <div className="App">
        
        <div className="App-header">
            {permission == 'manager'? <Categories/> : null}            
            <Products/>
                Welcome To Dashborad    
                <button onClick = {()=>{
                    // /localStorage.removeItem('Login')
                    let user_data = { User: false};
                    localStorage.setItem('Login', JSON.stringify(user_data)); 
                    props.dispatch(AccLogin.UserLogin(false))
                    navigate('/Login');
                }}> Logout</button>        
        </div>     
    </div>
  );
}
export default connect()(App);

