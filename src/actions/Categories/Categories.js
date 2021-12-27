import axios from 'axios';

export const getCategories = () => (dispatch) => {    

    let LoginURL = 'http://localhost:3004/category'; // TODO: add URL on env && Valid API Request && Use SWR

    axios.get(LoginURL)
    .then(function (response) {        
        // handle success              
        console.log("response Categoris", response.data);
        dispatch(CateData(response.data));
    })
    .catch(function (error) {
       // handle error
        console.log(error);
    });
}

export const CateData = (CateData) =>{
    return{
        type: "CATEGORIES_DATA", // TODO : Collect TYPE on FIle 
        CateData
    }
}