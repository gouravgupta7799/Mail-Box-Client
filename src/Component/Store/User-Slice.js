import { createSlice } from "@reduxjs/toolkit"

const intitalToken = localStorage.getItem('token');

const userState = {
    localId: '',
    idToken: intitalToken,
    isLoggedIn: !!intitalToken,
    mailDataRecived: [],
    mailDataSent: [],
    toggle: false
}

const userReducer = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        tokenUpdater(state, action) {
            localStorage.setItem('token', action.payload)
            state.isLoggedIn = true;
        },
        logoutHandler(state, action) {
            state.idToken = null;
            localStorage.removeItem('token');
            state.isLoggedIn = false;
            state.localId = action.payload;
        },
        localIdUpdater(state, action) {
            state.localId = action.payload
        },
        mailDataRecivedUpdater(state, action) {
            state.mailDataRecived = action.payload
        },
        mailDataSentUpdater(state, action) {
            state.mailDataSent = action.payload
        },
        toggleUpdater(state) {
            state.toggle = !state.toggle
        }
    }
})

export const userAction = userReducer.actions
export default userReducer.reducer