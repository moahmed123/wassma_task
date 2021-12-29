import React, { useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { GetPros } from '../../actions';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const EditProduct = (props) => {

    let { id } = useParams();
    const { state } = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (props.ProsIsUpdate) {
            if (props.ProsIsUpdate == true) {
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
        props.dispatch(GetPros.editProducts(
            id,
            e.target.thumb.value,
            e.target.name_en.value,
            e.target.name_ar.value,
            e.target.weight.value,
            e.target.category.value
        ));
    }
    return (
        <section className="add_new_Product">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center header_category'> Edit Product {state.ProName_en}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='col-12'>
                                <label> Thumb: </label>
                                <input type="text" name="thumb" defaultValue={state.thumb} />
                            </div>
                            <div className='col-12'>
                                <label> Name English: </label>
                                <input
                                    type="text"
                                    name="name_en"
                                    defaultValue={state.ProName_en}
                                />
                            </div>
                            <div className='col-12'>
                                <label> Name Arabic: </label>
                                <input
                                    type="text"
                                    name="name_ar"
                                    defaultValue={state.ProName_ar}
                                />
                            </div>
                            <div className='col-12'>
                                <label> weight: </label>
                                <input
                                    type="number"
                                    name="weight"
                                    defaultValue={state.weight}
                                />
                            </div>
                            <div className='col-12'>
                                <label> category: </label>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={state.category}
                                />
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        ProsIsUpdate: state.default.editPro,
    }
}
export default connect(mapStateToProps)(EditProduct);