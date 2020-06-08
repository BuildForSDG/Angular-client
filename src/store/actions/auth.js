import AuthService from '../../services/AuthService';
import {
	setCurrentUser,
	registerSuccess,
	logoutUser,
	getErrors,
} from './actionCreators';

/**
 * Login user action
 */
export const loginUser = (state, history) => (dispatch) => {
	AuthService.login(state.email, state.password)
		.then((resp) => {
			if (resp.data.success) {
				dispatch(setCurrentUser(resp.data.message));
				AuthService.saveToken(resp.data.token);
				history.push('/');
			}
		})
		.catch((error) => {
			alert(error);
			if (error) {
				dispatch(
					getErrors({
						loginError: error,
					})
				);
			}
		});
};

/**
 * Logout action
 */
export const logout = (history) => (dispatch) => {
	AuthService.logout();
	dispatch(logoutUser());
	history.push('/');
	window.location.reload();
};

/**
 * Register user action
 */
export const registerUser = (data, history) => (dispatch) => {
	AuthService.register(data)
		.then((resp) => {
			if (resp.data.success) {
				dispatch(registerSuccess());
				history.push('/login');
			}
		})
		.catch((error) => {
			if (error) {
				dispatch(
					getErrors({
						registerError: error,
					})
				);
			}
		});
};
