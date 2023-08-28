import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
    dataAddress : []
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getAddress: (state) => state.dataAddress,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/login',
          credentials
        );
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        commit("SET_LOGIN_ERROR", null);
        
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR", errorMessage); // Set error message in store
        console.error(error);
        return false;
      }
    },
    async register({ commit }, dataUsers) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/signup',
          dataUsers
        );
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        console.log("Token saved:", token);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    async getUserInfo({ state }) {
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/info",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        return response.data.user;
      } catch (error) {
        console.error(error);
        return null;
      }
    },

    async getUserAddress({ state, commit }) {
      try {
        const response = await axios.get(
          'https://ecommerce.olipiskandar.com/api/v1/user/addresses',
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        commit ('SET_ADDRESS', response.data)
       return response.data;
      } catch (error) {
      console.error(error);
      return null;
    }
  },

    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.dataAddress = address;
    },
  },
};

export default auth;