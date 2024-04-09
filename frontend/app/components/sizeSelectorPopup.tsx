import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import WatchButton from './watchButton';
import { Product } from '../../../shared/types/searchResponse';
import SizeChart from './sizeChart';

interface SizeSelectorPopupProps {
  show: boolean;
  selectedItem: Product;
  onClose: () => void;
  onAdd: (item: Product) => void;
}

const SizeSelectorPopup: React.FC<SizeSelectorPopupProps> = ({ show, selectedItem, onClose, onAdd }) => {
  return (
    <Modal show={show} onHide={onClose} backdrop="static" centered>
    <Modal.Header closeButton>
        <Modal.Title>select your size(s) for {selectedItem.displayName}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Button variant="outline-primary">Small</Button>{' '}
        <Button variant="outline-primary">Medium</Button>{' '}
        <Button variant="outline-primary">Large</Button>{' '}
    </Modal.Body>
    <Modal.Footer>
        <WatchButton onButtonClick={onAdd} />
    </Modal.Footer>
</Modal>
  );
};

export default SizeSelectorPopup;
