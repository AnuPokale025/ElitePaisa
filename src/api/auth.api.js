import apiClient from './api'

const AuthApi = {

    signup: async (userdata) => {
        try {
            const res = await apiClient.post('/register', userdata);
            return res.data
        } catch (error) {
            console.log(error);

            throw error.response.data;
        }
    },

    login: async (userdata) => {
        try {
            const res = await apiClient.post('/login', userdata);
            return res.data
        } catch (error) {
            console.log(error);

            throw error.response.data;
        }
    },

    contact: async (userdata) => {
        try {
            const res = await apiClient.post('/contact', userdata);
            return res.data

        } catch (error) {
            throw error.response.data
        }
    }

}

export default AuthApi;