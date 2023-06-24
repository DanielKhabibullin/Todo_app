import {generateRandomId} from '../../utils/randomNumber';

type TUser = {
	id: string;
	name: string;
	task: { taskId: string; text: string; status: string }[];
};

type TTasks = { taskId: string; text: string; status: string }[];

export let arrUsers: TUser[] = [];

export const setData = () => {
	localStorage.clear();
	localStorage.setItem('data', JSON.stringify(arrUsers));
};

export const getData = () => {
	if (localStorage.getItem('data')) {
		const dataInLS = localStorage.getItem('data');
		if (dataInLS) {
			return (arrUsers = JSON.parse(dataInLS));
		}
	}
};

export const addUserInArr = (name: string): void => {
	if (arrUsers.length === 0) {
		arrUsers.push({
			id: generateRandomId(),
			name: name,
			task: [],
		});
	}
	if (arrUsers.find((item) => item.name !== name)) {
		arrUsers.push({
			id: generateRandomId(),
			name: name,
			task: [],
		});
	}
	setData();
};

export const addTask = (id: string, text: string, status: string) => {
	if (arrUsers.find((item) => item.id === id)) {
		arrUsers
			.filter((item) => item.id === id)
			.map((item) => item.task.push({ taskId: generateRandomId(), text, status }));
	}
	setData();
};

export const getTask = (id: string): TTasks => {
	return arrUsers.filter((item) => item.id === id).map((item) => item.task)[0];
};

export const changeStatus = (id: string, taskId: string, status: string) => {
	if (arrUsers.find((item) => item.id === id)) {
		const myUser = arrUsers.filter((item) => item.id === id)[0];

		if (myUser.task.find((item) => item.taskId === taskId)) {
			myUser.task.filter((item) => item.taskId === taskId)[0].status = status;
		}
	}
	setData();
};

export const delTask = (id: string, taskId: string) => {
	if (arrUsers.find((item) => item.id === id)) {
		const myUser = arrUsers.filter((item) => item.id === id)[0];

		if (myUser.task.find((item) => item.taskId === taskId)) {
			const tasks = myUser.task.filter((item) => item.taskId !== taskId);
			arrUsers.filter((item) => item.id === id).map((item) => (item.task = tasks));
			console.log('delete', tasks);
		}
	}
	setData();
};

export const getUserId = (name: string): string => {
	return arrUsers.filter((item) => item.name === name)[0].id;
};

export const getUserName = (id: string): string => {
	return arrUsers.filter((item) => item.id === id)[0].id;
};

export const changeTaskText = (id: string, taskId: string, newText: string) => {
	if (arrUsers.find((item) => item.id === id)) {
		const myUser = arrUsers.filter((item) => item.id === id)[0];
		if (myUser.task.find((item) => item.taskId === taskId)) {
			// myUser.task.filter((item) => item.taskId === taskId)[0].text = newText;
			myUser.task.find((item) => item.taskId === taskId)!.text = newText;
		}
	}
	setData();
};