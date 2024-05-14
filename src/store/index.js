import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        joinedTeam: false,
        isAuth: false
    },
    mutations: {
        leaveTeam (state) {
            state.joinedTeam = false;
        },
        joinTeam(state) {
            state.joinedTeam = true;
        },
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    },
    plugins: [createPersistedState()]
})