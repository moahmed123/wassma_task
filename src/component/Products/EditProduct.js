import React, { useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { GetPros } from '../../actions';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const EditProduct = (props) => {

    let { id } = useParams();
    const { state } = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        //    console.log(props.location.state);
        console.log(state);
        if (props.ProsIsUpdate) {
            if (props.ProsIsUpdate == true) {
                navigate('/')
            }
        }
        return () => { };
    }, []);
    useEffect(() => {
        if (props.ProsIsUpdate) {
            if (props.ProsIsUpdate == true) {
                navigate('/')
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
        props.dispatch(GetPros.editProducts(
            id,
            e.target.thumb.value,
            e.target.name_en.value,
            e.target.name_ar.value,
            e.target.weight.value,
            e.target.category.value
        ));
        // editProducts(thumb, ProName_en, ProName_ar, weight, category)       
    }
    return (
        <div>
            edit Product {id}
            <form onSubmit={handleSubmit}>
                <label>
                    thumb:
                    <input
                        type="text"
                        name="thumb"
                        defaultValue={state.thumb}
                    />
                </label>
                <label>
                    Name English:
                    <input
                        type="text"
                        name="name_en"
                        defaultValue={state.ProName_en}
                    />
                </label>
                <label>
                    Name Arabic:
                    <input
                        type="text"
                        name="name_ar"
                        defaultValue={state.ProName_ar}
                    />
                </label>
                <label>
                    weight:
                    <input
                        type="number"
                        name="weight"
                        defaultValue={state.weight}
                    />
                </label>
                <label>
                    category:
                    <input
                        type="text"
                        name="category"
                        defaultValue={state.category}
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
        ProsIsUpdate: state.default.editPro,
    }
}
export default connect(mapStateToProps)(EditProduct);