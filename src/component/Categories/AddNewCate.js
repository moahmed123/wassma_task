import React, {useEffect} from 'react';
import {GetCate} from '../../actions';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddNewCate = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.CateIsAdd) {
            if (props.CateIsAdd == true) {
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

        props.dispatch(GetCate.addCategory(
            e.target.name_en.value,
            e.target.name_ar.value 
        ));        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>                
                <label>
                    Name English:
                    <input
                        type="text"
                        name="name_en"                        
                    />
                </label>
                <label>
                    Name Arabic:
                    <input
                        type="text"
                        name="name_ar"                        
                    />
                </label>                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {
        CateIsAdd: state.default.editCate,
    }
}
export default connect(mapStateToProps)(AddNewCate);
