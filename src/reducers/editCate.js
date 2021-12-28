export default function products(state = [], action) {
    switch (action.type) {   
        case 'CATEGORY_IS_UPDATE':
            console.log('ProsData ProsData ....', action.CateIsUpdate);
          return action.CateIsUpdate; //state.concat([action.text]);        
      default:
        return state;
    }
  }