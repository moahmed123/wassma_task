export default function userLogin(state = [], action) {
    switch (action.type) {
      case 'LOGIN_USER':
          console.log('action user ....', action.Login);
        return action.Login; //state.concat([action.text]);        
      default:
        return state;
    }
  }