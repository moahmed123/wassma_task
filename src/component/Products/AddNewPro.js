import React, { useEffect } from 'react';
import { GetPros } from '../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
        <section className="add_new_Product">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center header_category'> Add New Product </h2>
                        <form onSubmit={handleSubmit}>
                            <div className='col-12'>
                                <label> Thumb: </label>
                                <input type="text" name="thumb" />
                            </div>
                            <div className='col-12'>
                                <label> Name English: </label>
                                <input
                                    type="text"
                                    name="name_en"
                                />
                            </div>
                            <div className='col-12'>
                                <label> Name Arabic: </label>
                                <input
                                    type="text"
                                    name="name_ar"
                                />
                            </div>
                            <div className='col-12'>
                                <label> weight: </label>
                                <input
                                    type="number"
                                    name="weight"
                                />
                            </div>
                            <div className='col-12'>
                                {/* TODO: work for Choose From Categories in DB Select/Option  */}
                                <label> category: </label>
                                <input
                                    type="text"
                                    name="category"
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
    return {
        ProIsAdd: state.default.editPro,
    }
}
export default connect(mapStateToProps)(AddNewPro);
