
export default function products(state = [], action) {
    switch (action.type) {
        case 'CATEGORIES_DATA':
            console.log('ProsData CateData ....', action.CateData);
            return action.CateData; //state.concat([action.text]);        
        default:
            return state;
    }
}