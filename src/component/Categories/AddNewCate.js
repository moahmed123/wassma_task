import React, { useEffect } from 'react';
import { GetCate } from '../../actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
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
        <section className="add_new_category">
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center header_category'> add new category </h2>
                        <form onSubmit={handleSubmit}>
                            <div className='col-12'>
                                <label> Name English: </label>
                                <input type="text" name="name_en" />
                            </div>

                            <div className='col-12'>
                                <label> Name Arabic: </label>
                                <input type="text" name="name_ar" />
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
        CateIsAdd: state.default.editCate,
    }
}
export default connect(mapStateToProps)(AddNewCate);
