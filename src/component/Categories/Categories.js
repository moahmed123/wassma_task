import React, { useEffect } from 'react';
import { GetCate } from '../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import "./category.css";
import deleteSvg from './../../delete.svg';
import editSvg from './../../edit.svg';


const Categories = (props) => {
    useEffect(() => {
        props.dispatch(GetCate.getCategories());
    }, []);
    let navigate = useNavigate();
    return (
        <div>
            <div className='header_table'>
                <h5 className='header_table_head'>Categories</h5>
                <Button className='header_table_btn' onClick={() => navigate(`/AddNewCate`)}>Add Category</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.Categories_Data && props.Categories_Data.map((data, key) => {
                            return (
                                <tr key={key}>
                                    {/* {data.name_ar} */}
                                    <td>{data.name_en}</td>
                                    <td className='table_td_center'>
                                        <Button className='table_icon_delete' variant="danger" onClick={() => {
                                            console.log(data.id)
                                            props.dispatch(GetCate.deleteCategory(data.id))
                                        }}> 
                                            <img src={deleteSvg} />
                                        </Button>
                                        <Button
                                            className='table_icon_edit'
                                            onClick={() => {
                                                console.log(data);
                                                console.log(JSON.stringify(data));
                                                console.log(JSON.stringify(data));
                                                // return false;
                                                navigate(`/EditCategory/${data.id}`, { state: data });

                                            }}><img src={editSvg} /></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default connect((state) => {
    return {
        Categories_Data: state.default.CateData
    }
})(Categories);