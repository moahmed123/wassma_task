import React, {useEffect, useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import Products from './component/Products/Products';
import Categories from './component/Categories/Categories';
import { useNavigate } from 'react-router-dom';
import { AccLogin, GetPros, GetCate } from './actions';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function App(props) {    
    const [permission, setPermission] = useState('');
    let navigate = useNavigate();    
    const [dir, setDir] = useState('ltr');
    const { t, i18n } = useTranslation();

    useEffect(() => {   
        //set update Category, Product.
        props.dispatch(GetPros.EditPro(false));
        props.dispatch(GetCate.EditCate(false));

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
        
        // chack lang 
        // if()/
        setLang(i18n.language);
    },[]);  
    
    const setLang = (lang) => {        
        if ( lang == 'ar'){            
            i18n.changeLanguage('ar');
            document.documentElement.dir = 'rtl';
        }else{            
            i18n.changeLanguage('en');
            document.documentElement.dir = 'ltr';
        }
    }    
  return (    
    <>
        <div className="App-header"> 
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h3> {t('Welcome')} </h3>   
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 btn-end'>
                        <Button 
                            className='Lang_btn'
                            onClick = {()=>{
                                let lang = i18n.language == 'en'? 'ar':'en';
                                setLang(lang);                                               
                            }}> 
                            {t("lang")} 
                        </Button>

                        <Button 
                        className='nav_logout'
                        onClick = {()=>{
                            // /localStorage.removeItem('Login')
                            let user_data = { User: false};
                            localStorage.setItem('Login', JSON.stringify(user_data)); 
                            props.dispatch(AccLogin.UserLogin(false))
                            navigate('/Login');
                        }}> {t("Logout")}</Button>   
                       
                    </div>
                </div>
            </div>                                                   
        </div>
        <section className='home_dashborad'>
            <div className='container'>
                <div className='row'>
                    
                        {
                            permission == 'manager'? 
                                <div className='col-lg-6 col-md-12 col-ms-12 col-xs-12'>
                                    <Categories/> 
                                </div>
                            : 
                            null
                        } 
                    
                    <div className={`${permission == 'manager'? 'col-lg-6':'col-lg-12'} col-md-12 col-ms-12 col-xs-12`}>                        
                        <Products/>
                    </div>                       
                </div>                                                 
            </div>     
        </section>    
        </>            
  );
}
export default connect()(App);

