import React, {useEffect, useCallback} from 'react';
import {GetPros} from '../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Products(props) {
    useEffect(() => {
        props.dispatch(GetPros.getProducts());   
    }, []);
    let navigate = useNavigate();
    return (
        <div> 
            <button>Add Products</button>
            {
                props.Products_Data && props.Products_Data.map((data, key)=>{
                    return (                       
                         <div key={key}>
                            <img src={data.thumb}/>
                            {data.ProName_en}
                            {data.ProName_ar}
                            {data.weight}
                            {data.category}
                            <div>
                                <button onClick={()=>{
                                    console.log(data.id)
                                    props.dispatch(GetPros.deleteProducts(data.id));
                                    
                                }}>Delete</button>
                                <button
                                onClick={()=>{
                                    console.log(data);
                                    console.log(JSON.stringify(data));
                                    console.log(JSON.stringify(data));
                                    // return false;
                                    navigate(`/EditProduct/${data.id}`, { state: data });
                                    
                                }}>Edite</button>                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect((state)=>{    
    return{
        Products_Data: state.default.ProsData 
    }
})(Products);