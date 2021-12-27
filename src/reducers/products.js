 
export default function products(state = [], action) {
    switch (action.type) {
      case 'PRODUCTS_DATA':
          console.log('ProsData ProsData ....', action.ProsData);
        return action.ProsData; //state.concat([action.text]);           
      default:
        return state;
    }
  }