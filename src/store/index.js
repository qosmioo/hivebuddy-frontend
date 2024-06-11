import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store= createStore({
    state: {
        authToken: "",
        joinedTeam: false,
        teamId: "",
        teamName: "",
        isAuth: false,
        hideNav: true,
        email: "",
        username: "",
        userId: "",
    },
    mutations: {
        showNavbar(state) {
          state.hideNav = false;
        },
        hideNavbar(state) {
            state.hideNav = true;
        },
        leaveTeam(state) {
            state.joinedTeam = false;
            state.teamId = ""
        },
        setTeam(state, team) {
            state.joinedTeam = true;
            state.teamId = team.id;
            state.teamName = team.name;
        },
        login(state, authData) {
            state.isAuth = true;
            state.username = authData.username;
            state.password = authData.password;
            state.userId = authData.userId;
            state.email = authData.email;
            state.hideNav = false;
        },
        logout(state) {
            state.isAuth = false;
            state.joinedTeam = false;
            state.username = "";
            state.password = "";
            state.userId = "";
            state.hideNav = true;
        }
    },
    plugins: [createPersistedState()]
})