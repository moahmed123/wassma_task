import React, {useEffect} from 'react';
import {GetPros} from '../../actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import './Products.css';
import deleteSvg from './../../delete.svg';
import editSvg from './../../edit.svg';

function Products(props) {
    useEffect(() => {
        props.dispatch(GetPros.getProducts());   
    }, []);
    let navigate = useNavigate();
    return (
        <div> 
             <div className='header_table'>
                <h5 className='header_table_head'>Products</h5>                
                <Button className='header_table_btn' variant="primary" onClick={ () => navigate(`/AddProduct`)}>Add Products</Button>
            </div>            

            <Table striped bordered hover>
                <thead>
                    <tr>                                        
                        <th>Image</th>
                        <th>Name</th>
                        <th>weight</th>
                        <th>category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                props.Products_Data && props.Products_Data.map((data, key)=>{
                    return ( 
                        <tr key={key}>                                                                
                            <td><img width={70} src={data.thumb}/></td>
                            <td>{data.ProName_en}</td>                        
                            {/* <td>{data.ProName_ar}</td>                         */}
                            <td>{data.weight}</td>                        
                            <td>{data.category}</td>
                            <td className='table_td_center'>
                                <Button className='table_icon_delete' variant="danger" onClick={()=>{
                                        console.log(data.id)
                                        props.dispatch(GetPros.deleteProducts(data.id));                                        
                                    }}
                                >
                                        <img src={deleteSvg} />
                                </Button>
                                <Button
                                    className='table_icon_edit'
                                    onClick={()=>{
                                        console.log(data);
                                        console.log(JSON.stringify(data));
                                        console.log(JSON.stringify(data));
                                        // return false;
                                        navigate(`/EditProduct/${data.id}`, { state: data });                                        
                                    }}
                                >
                                    <img src={editSvg} />
                                </Button> 
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

export default connect((state)=>{    
    return{
        Products_Data: state.default.ProsData 
    }
})(Products);