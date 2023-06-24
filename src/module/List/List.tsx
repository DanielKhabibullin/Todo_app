import {TableBody} from './TableBody/TableBody';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addTask, getData, getTask, getUserName} from '../UsersData/user';
import {setUser, setUserId, setUserTask} from '../../store/reducer';
import {Button, Table} from 'react-bootstrap';
import {ClearTable} from '../ClearTable/ClearTable';
import {useNavigate} from 'react-router-dom';

export const List = () => {
	const [text, setText] = useState('');
	const [disabled, setDisabled] = useState(true);
	const task: { taskId: string; text: string; status: string }[] = useAppSelector(
		(state) => state.userReducer.task,
	);
	const id = useAppSelector((state) => state.userReducer.id);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (text.length > 0) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [text]);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		const id = location.pathname.slice(6);
		dispatch(setUser(getUserName(id)));
		dispatch(setUserTask(getTask(id)));
		dispatch(setUserId(id));
	}, [dispatch]);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		e.preventDefault();
		if (e.target instanceof HTMLInputElement) {
			setText(e.target.value.trimStart());
		}
	};

	const newTask = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		addTask(id, text, 'In progress');
		dispatch(setUserTask(getTask(id)));
		setText('');
	};

	return (
		<>
				<h1 className='text-center mt-4'>ToDo List</h1>

				<form onSubmit={newTask}>
					<div className='d-flex flex-wrap justify-content-center align-items-center'>
						<label className='form-group me-3 mb-3'>
							<input
								onChange={handleChange}
								value={text}
								type='text'
								className='form-control'
								placeholder='enter new task'
							/>
						</label>

							<Button type='submit' className='me-3 mb-3' disabled={disabled}>
								Save
							</Button>

							<Button
								variant="warning"
								onClick={() => {
									setText('');
								}}
								type='reset'
								disabled={disabled}
								className='me-3 mb-3'
							>
								Clear
							</Button>
							<Button
							className='text-nowrap mb-3'
							variant="secondary"
							onClick={() => {
								navigate('/');
							}}
							type='submit'
						>
							Sign Out
						</Button>
					</div>
				</form>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>№</th>
								<th>Task</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							{task === null ? (
								<ClearTable />
							) : task.length !== 0 ? (
								task.map((item, index) => <TableBody key={item.taskId} item={item} index={index} />)
							) : (
								<ClearTable />
							)}
						</tbody>
					</Table>
		</>
	);
};
