import createDataContext from './createDataContext';

const initialState = {
    initialized: false,
    isLogged: false,
    user: {
        id: 118,
        username: "root",
        name: "Çağlar",
        lastname: "YILDIRIM",
        email: "test@test.com",
        password: "1234",
        phone: "555 555 2312"
    },
    model: {
        email: "",
        password: ""
    }
}

const authReducer = (state, action) => {

}


export const { Context, Provider } = createDataContext(authReducer, {}, initialState);