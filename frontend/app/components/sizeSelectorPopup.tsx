import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import WatchButton from './watchButton';
import { Product } from '../../../shared/types/searchResponse';
import SizeChart from './sizeChart';

interface SizeSelectorPopupProps {
  show: boolean;
  selectedItem: Product;
  onClose: () => void;
  onAdd: (item: Product) => void;
}

const SizeSelectorPopup: React.FC<SizeSelectorPopupProps> = ({ show, onClose, selectedItem, onAdd }) => {
  return (
    <Modal show={show} onHide={onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedItem.displayName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SizeChart sizeGroups={[]} />
      </Modal.Body>
      <Modal.Footer>
        <WatchButton item={selectedItem} onButtonClick={onAdd} />
      </Modal.Footer>
    </Modal>
  );
};

export default SizeSelectorPopup;
