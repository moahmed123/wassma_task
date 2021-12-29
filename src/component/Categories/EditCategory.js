import React, {useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { GetCate } from '../../actions';
import { Button } from 'react-bootstrap';
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
        <section className="add_new_category">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-center header_category'>Edit Category {state.name_en}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='col-12'>
                            <label> Name English: </label>                        
                            <input type="text" name="name_en" defaultValue={state.name_en} />
                        </div>

                        <div className='col-12'>
                            <label> Name Arabic: </label>
                            <input type="text" name="name_ar" defaultValue={state.name_ar} />                            
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
        CateIsUpdate: state.default.editCate,
    }
}
export default connect(mapStateToProps)(EditCategory);