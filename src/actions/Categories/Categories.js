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
        type: "CATEGORIES_DATA", // TODO : Collect TYPE on File. 
        CateData
    }
}


//Edit Category
export const  editCategory = (id, name_en, name_ar) => async(dispatch) => {    

    let LoginURL = `http://localhost:3004/category/${id}`; // TODO: add URL on env && Valid API Request.

    await axios.put(LoginURL, {                
        name_en: name_en,
        name_ar: name_ar        
    })
    .then( (response) => {        
        // handle success              
        console.log("response Update", response);
        if(response.status == 200){
            dispatch(EditCate(true));
            // navigate('/');
            // dispatch(getProducts()); // TODO: WE can Optmise this line to not load requests when delete. 
        }        
    })
    .catch((error) => {
       // handle error
        console.log(error);
    });
}

export const EditCate = (CateIsUpdate) =>{
    return{
        type: "CATEGORY_IS_UPDATE", // TODO : Collect TYPE on FIle 
        CateIsUpdate
    }
}

//Delete Category
export const  deleteCategory = (CategoryId) => async(dispatch) => {    

    let LoginURL = 'http://localhost:3004/category/'; // TODO: add URL on env && Valid API Request 

    await axios.delete(LoginURL + CategoryId)
    .then( (response) => {        
        // handle success              
        console.log("response Delte", response);
        if(response.status == 200){
            dispatch(getCategories()); // TODO: WE can Optmise this line to not load requests when delete. 
        }        
    })
    .catch((error) => {
       // handle error
        console.log(error);
    });
}

// Add New Category. 
export const addCategory = (name_en, name_ar) => async(dispatch) => {    

    let LoginURL = 'http://localhost:3004/category'; // TODO: add URL on env && Valid API Request 

    await axios.post(LoginURL, { // We Can Collect all Methods for One file. 
        name_en,
        name_ar
    })
    .then(function (response) {        
        // handle success              
        console.log("response added ", response);  
        if(response.status == 201){
            dispatch(EditCate(true));            
        }      
    })
    .catch(function (error) {
       // handle error
        console.log(error);
    });
}