import {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setUserTask} from '../../../store/reducer';
import {changeStatus, changeTaskText, delTask, getTask} from '../../UsersData/user';

interface IProps {
	item: {
		taskId: string;
		text: string;
		status: string;
		priority: string};
	index: number;
}

export const TableBody = ({item, index}: IProps) => {
	const {taskId, text, status, priority} = item;
	const [statusTask, setStatusTask] = useState(false);
	const dispatch = useAppDispatch();
	const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
	const id: string = useAppSelector((state) => state.userReducer.id);

	const deleteTask = () => {
		delTask(id, taskId);
		dispatch(setUserTask(getTask(id)));
	};

	const doneTask = () => {
		setStatusTask(!statusTask);
		changeStatus(id, taskId, statusTask ? 'In progress' : 'Completed');
		dispatch(setUserTask(getTask(id)));
	};

	const editTask = () => {
		setIsEditing(true);
		setEditedText(text);
	}

	const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		changeTaskText(id, taskId, editedText);
		setIsEditing(false);
		dispatch(setUserTask(getTask(id)));
	}

	useEffect(() => {
		dispatch(setUserTask(getTask(id)));
	}, [dispatch, id, statusTask]);

	const getPriorityClassName = () => {
		switch (priority) {
			case 'table-warning':
				return 'table-warning';
			case 'table-danger':
				return 'table-danger';
			default:
				return 'table-light';
		}
	};

	return (
		<>
			<tr className={`${statusTask ? 'table-success' : getPriorityClassName()}`} data-task-id={taskId}>
				<td>{index + 1}</td>
				{isEditing ?
					<td>
						<form onSubmit={handleEdit}>
							<input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
						</form>
					</td>
					:
					<td className={statusTask ? 'text-decoration-line-through table-success' : ''}>{text}</td>
				}
				<td>{status}</td>
				<td>
					<Button
						variant="danger"
						onClick={deleteTask} className='me-1 mb-1'
					>
						Delete
					</Button>
					<Button
						onClick={doneTask} className='me-1 mb-1'
						variant="success"
					>
						{statusTask ? 'Uncomplete' : 'Complete'}
					</Button>
					<Button
						className='mb-1'
						variant="secondary"
						onClick={editTask}
						disabled={statusTask}
					>
						Edit
					</Button>
				</td>
			</tr>
		</>
	);
};
