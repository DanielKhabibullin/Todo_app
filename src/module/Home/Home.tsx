import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { addUserInArr, getData, getUserId } from '../UsersData/user';
import { useNavigate } from 'react-router-dom';
import { setUser, setUserId } from '../../store/reducer';

export const Home = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [disabled, setDisabled] = useState(true);
	const [name, setName] = useState('');

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		e.preventDefault();
		if (e.target instanceof HTMLInputElement) {
			setName(e.target.value.trimEnd());
		}
	};

	const addUser = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		addUserInArr(name);
		dispatch(setUser(name));
		dispatch(setUserId(getUserId(name)));
		userPage();
	};

	const userPage = () => {
		navigate(`/user/${getUserId(name)}`);
	};

	useEffect(() => {
		if (name.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [name]);

	useEffect(() => {
		getData();
	});

	return (
		<div className='app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column'>
			<h1 className='d-flex align-items-center'>ToDo List</h1>
			<span className='d-block mb-2'>Please authenticate yourself</span>
			<form onSubmit={addUser} className='d-flex align-items-center'>
				<label className='form-group me-3 mb-0'>
					<input
						value={name}
						type='text'
						className='form-control'
						placeholder='Enter your username'
						required
						onChange={handleChange}
					/>
				</label>
				<Button type='submit' className='btn btn-primary' disabled={disabled}>
					Sign in
				</Button>
			</form>
		</div>
	);
};
