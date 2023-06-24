const initialState = {
	id: '',
	user: '',
	task: null,
};

interface IId {
	type: string;
	id: string;
}

interface IUser {
	type: string;
	user: string;
}

interface ITask {
	type: string;
	task: object;
}

const SET_USER = 'SET_USER';
const SET_USER_ID = 'SET_USER_ID';
const SET_USER_TASK = 'SET_USER_TASK';

export const setUserId = (id: string): IId => ({
	type: SET_USER_ID,
	id,
});

export const setUser = (user: string): IUser => ({
	type: SET_USER,
	user,
});

export const setUserTask = (task: object): ITask => ({
	type: SET_USER_TASK,
	task,
});

export const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_USER_ID:
			return {
				...state,
				id: action.id,
			};

		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		case SET_USER_TASK:
			return {
				...state,
				task: action.task,
			};

		default:
			return state;
	}
};
