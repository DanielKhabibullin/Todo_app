import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ConfirmModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	taskText: string;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
	isOpen,
	onClose,
	onConfirm,
	taskText,
}) => {
	return (
		<Modal show={isOpen} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Delete confirm</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Are you sure you want to delete task: "{taskText}"?</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={onClose}>
					Cancel
				</Button>
				<Button variant="danger" onClick={onConfirm}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
