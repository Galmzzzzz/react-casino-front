import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	id: number | null;
	username: string;
	email: string;
	balance: number;
	isAuthenticated: boolean;
}

const InitialState: UserState = {
	id: null,
	username: '',
	email: '',
	balance: 0,
	isAuthenticated: false,
};

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState: InitialState,
	reducers: {
		LogoutUser: (state) => {
			state.isAuthenticated = false;
			state.username = '';
		},
		setUser(state, action) {
			const { id, username, email, profile } = action.payload;
			state.id = id;
			state.username = username;
			state.email = email;
			state.balance = parseFloat(profile.balance);
			state.isAuthenticated = true;
		},
	},
});

export const { LogoutUser, setUser } = UserSlice.actions;
export default UserSlice.reducer;
