import React, {useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GetCate } from '../../actions';
import { connect } from 'react-redux';

const  EditCategory = (props) => {
    let { id } = useParams();
    const { state } = useLocation();
    let navigate = useNavigate();

    console.log(state);

    useEffect(() => {
        if (props.CateIsUpdate) {
            if (props.CateIsUpdate == true) {
                navigate('/');
            }
        }
        return () => { };
    });
     // Function Handle Submit Form.
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(            
            e.target.name_en.value,
            e.target.name_ar.value            
        );        
        props.dispatch(GetCate.editCategory(
            id,
            e.target.name_en.value,
            e.target.name_ar.value 
        ));             
    }
    return (
        <div>
            Edit Category {id}
            <form onSubmit={handleSubmit}>
                <label>
                    thumb:
                    <input
                        type="text"
                        name="name_en"
                        defaultValue={state.name_en}
                    />
                </label>
                <label>
                    Name English:
                    <input
                        type="text"
                        name="name_ar"
                        defaultValue={state.name_ar}
                    />
                </label>               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        CateIsUpdate: state.default.editCate,
    }
}
export default connect(mapStateToProps)(EditCategory);