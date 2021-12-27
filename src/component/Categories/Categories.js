import React, {useEffect} from 'react';
import {GetCate} from '../../actions';
import { connect } from 'react-redux';

const Categories = (props) => {
    useEffect(() => {
        props.dispatch(GetCate.getCategories());   
    }, []);
    return (
        <div>
                Categories
                {                    
                    props.Categories_Data && props.Categories_Data.map((data, key)=>{
                        return (
                            <div key={key}>                            
                                {data.name_en}
                                {data.name_ar}                            
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default connect((state)=>{       
    return{
        Categories_Data: state.default.CateData
    }
})(Categories);