import { combineReducers } from 'redux';
import UserLogin from './userLogin';
import ProsData from './products';
import CateData from './categories';
import editPro from './editPro';
import editCate from './editCate';

export default combineReducers({  
  UserLogin,
  ProsData,
  CateData,
  editPro,
  editCate
});