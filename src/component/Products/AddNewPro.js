import React, {useEffect} from 'react';
import {GetPros} from '../../actions';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddNewPro = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (props.ProIsAdd) {
            if (props.ProIsAdd == true) {
                navigate('/');
            }
        }
        return () => { };
    });
    // Function Handle Submit Form.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            e.target.thumb.value,
            e.target.name_en.value,
            e.target.name_ar.value,
            e.target.weight.value,
            e.target.category.value
        );
        props.dispatch(GetPros.addProduct(
            e.target.thumb.value,
            e.target.name_en.value,
            e.target.name_ar.value,
            e.target.weight.value,
            e.target.category.value
        ));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    thumb:
                    <input
                        type="text"
                        name="thumb"                        
                    />
                </label>
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
                <label>
                    weight:
                    <input
                        type="number"
                        name="weight"                        
                    />
                </label>
                <label>
                    category:
                    <input
                        type="text"
                        name="category"                        
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {    
    return {
        ProIsAdd: state.default.editPro,
    }
}
export default connect(mapStateToProps)(AddNewPro);
