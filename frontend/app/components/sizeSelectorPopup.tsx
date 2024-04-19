import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import WatchButton from './watchButton';
import { Product } from '../../../shared/types/searchResponse';
import SizeChart from './sizeChart';
import ProductSizeInventory, { Choice, Size, SizeGroup, IncludedSku } from '../../../shared/types/productSizeInventory';
import LoadingSpinner from './loadingSpinner';
import UniqueSelectionValue from '../../../shared/types/uniqueSelectionValue'

interface SizeSelectorPopupProps {
  show: boolean;
  selectedItem: Product;
  onClose: () => void;
  onAdd: (items: UniqueSelectionValue[]) => void;
}

const SizeSelectorPopup: React.FC<SizeSelectorPopupProps> = ({ show, selectedItem, onClose, onAdd }) => {
  const [productSizeInventory, setProductSizeInventory] = useState<ProductSizeInventory>();
  const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState<UniqueSelectionValue[]>([]);

  const handleAddToSelection = (color: Choice, group: SizeGroup, sku: IncludedSku) => {
    var watchedItem = getWatchedItem(selectedItem, color, group, sku);
    setSelectedValues(prevSelected => [...prevSelected, watchedItem]);
  };

  const handleClearSelection = () => {
    setSelectedValues([]);
  }

  const handleWatch = () => {
    onAdd(selectedValues);
  }

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
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>select your size(s) for {selectedItem.displayName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <LoadingSpinner />
        ) : (
          productSizeInventory?.choices.map((colorOption: Choice) => (
            <div key={colorOption.color.code}>
              <p>{colorOption.color.displayName.toLocaleLowerCase()}</p>
              <SizeChart color={colorOption} sizeGroups={colorOption.sizeGroups} handleAddToSelection={handleAddToSelection} />
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClearSelection}>Clear</Button>
        <WatchButton onButtonClick={handleWatch} item={selectedItem} />
        <div>
          {selectedValues.map((value: UniqueSelectionValue, index: number) => (
            <div key={index}>
              {value.productDisplayName}
              {value.colorDisplayName}
              {value.groupDisplayName}
              {value.sizeDisplayName}
            </div>
          ))}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const getWatchedItem = (selectedItem: Product, color: Choice, group: SizeGroup, sku: IncludedSku): UniqueSelectionValue => {
  const usv: UniqueSelectionValue = {
    productChoiceId: selectedItem.choiceId,
    productDisplayName: selectedItem.displayName,
    colorDisplayName: color.color.displayName,
    groupCode: group.groupCode,
    groupDisplayName: group.displayName,
    sizeCode: sku.size.code,
    sizeDisplayName: sku.size.displayName
  };

  return usv;
};

export default SizeSelectorPopup;
