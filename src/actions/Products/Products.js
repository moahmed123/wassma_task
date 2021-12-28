import axios from 'axios';

export const getProducts = () => async(dispatch) => {    

    let LoginURL = 'http://localhost:3004/Products'; // TODO: add URL on env && Valid API Request 

    await axios.get(LoginURL)
    .then(function (response) {        
        // handle success              
        console.log("response", response.data);
        dispatch(ProsData(response.data));
    })
    .catch(function (error) {
       // handle error
        console.log(error);
    });
}

export const ProsData = (ProsData) =>{
    return{
        type: "PRODUCTS_DATA", // TODO : Collect TYPE on FIle 
        ProsData
    }
}

//Edit Pro
export const  editProducts = (id, thumb, ProName_en, ProName_ar, weight, category) => async(dispatch) => {    

    let LoginURL = `http://localhost:3004/Products/${id}`; // TODO: add URL on env && Valid API Request.

    await axios.put(LoginURL, {
        
        thumb: thumb,
        ProName_en: ProName_en,
        ProName_ar: ProName_ar,
        weight: weight,
        category: category
        
    })
    .then( (response) => {        
        // handle success              
        console.log("response Delte", response);
        if(response.status == 200){
            dispatch(EditPro(true))
            // navigate('/');
            // dispatch(getProducts()); // TODO: WE can Optmise this line to not load requests when delete. 
        }        
    })
    .catch((error) => {
       // handle error
        console.log(error);
    });
}

export const EditPro = (ProsIsUpdate) =>{
    return{
        type: "PRODUCT_IS_UPDATE", // TODO : Collect TYPE on FIle 
        ProsIsUpdate
    }
}

// Add New Product. 
export const addProduct = (thumb, ProName_en, ProName_ar, weight, category) => async(dispatch) => {    

    let LoginURL = 'http://localhost:3004/Products'; // TODO: add URL on env && Valid API Request 

    await axios.post(LoginURL, { // We Can Collect all Methods for One file. 
        thumb: thumb,
        ProName_en: ProName_en,
        ProName_ar: ProName_ar,
        weight: weight,
        category: category
    })
    .then(function (response) {        
        // handle success              
        console.log("response added ", response);  
        if(response.status == 201){
            dispatch(EditPro(true));            
        }      
    })
    .catch(function (error) {
       // handle error
        console.log(error);
    });
}

//Delete Pro
export const  deleteProducts = (ProductId) => async(dispatch) => {    

    let LoginURL = 'http://localhost:3004/Products/'; // TODO: add URL on env && Valid API Request 

    await axios.delete(LoginURL + ProductId)
    .then( (response) => {        
        // handle success              
        console.log("response Delte", response);
        if(response.status == 200){
            dispatch(getProducts()); // TODO: WE can Optmise this line to not load requests when delete. 
        }        
    })
    .catch((error) => {
       // handle error
        console.log(error);
    });
}