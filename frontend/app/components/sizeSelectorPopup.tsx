import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import WatchButton from './watchButton';
import { Product } from '../../../shared/types/searchResponse';
import SizeChart from './sizeChart';
import ProductSizeInventory, { Choice, Size, SizeGroup, IncludedSku } from '../../../shared/types/productSizeInventory';

interface SizeSelectorPopupProps {
  show: boolean;
  selectedItem: Product;
  onClose: () => void;
  onAdd: (item: Product) => void;
}



const SizeSelectorPopup: React.FC<SizeSelectorPopupProps> = ({ show, selectedItem, onClose, onAdd }) => {
  const [productSizeInventory, setProductSizeInventory] = useState<ProductSizeInventory>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetch('http://localhost:3001/posts/availableSizes/TEST')
          .then((response) => response.json())
          .then((data) => setProductSizeInventory(data))
          .catch((error) => console.error('Error fetching data:', error));
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, []);

  return (
    <Modal show={show} onHide={onClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>select your size(s) for {selectedItem.displayName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          productSizeInventory?.choices.map((colorOption: Choice) => (
            <div>
              <p>{colorOption.color.displayName}</p>
              <SizeChart sizeGroups={colorOption.sizeGroups} />
            </div>
           ))
        }
      </Modal.Body>
      <Modal.Footer>
        <WatchButton onButtonClick={onAdd} item={selectedItem} />
      </Modal.Footer>
    </Modal>
  );
};

export default SizeSelectorPopup;
