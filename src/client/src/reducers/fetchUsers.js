export default (
    state = [],
    action) => {
        switch (action.type) {
            case 'GET_USERS':
                return action.payload;
            case 'UPDATE_USER':
                return state;
            case 'DELETE_USER':
                return state;
                default: 
                return state;
        }
    };