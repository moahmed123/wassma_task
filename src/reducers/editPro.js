export default function products(state = [], action) {
    switch (action.type) {   
        case 'PRODUCT_IS_UPDATE':
            console.log('ProsData ProsData ....', action.ProsIsUpdate);
          return action.ProsIsUpdate; //state.concat([action.text]);        
      default:
        return state;
    }
  }