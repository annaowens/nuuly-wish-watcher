import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import WatchButton from './watchButton';
import { Product } from '../../../shared/types/searchResponse';
import SizeChart from './sizeChart';
import ProductSizeInventory, { Choice, Size, SizeGroup, IncludedSku } from '../../../shared/types/productSizeInventory';
import { UniqueSelectionValue } from '../../../shared/types/uniqueSelectionValue';
import LoadingSpinner from './loadingSpinner';

interface SizeSelectorPopupProps {
  show: boolean;
  selectedItem: Product;
  onClose: () => void;
  onAdd: (item: Product) => void;
}

const SizeSelectorPopup: React.FC<SizeSelectorPopupProps> = ({ show, selectedItem, onClose, onAdd }) => {
  const [productSizeInventory, setProductSizeInventory] = useState<ProductSizeInventory>();
  const [loading, setLoading] = useState(false);
  const [selectedValues, setSelectedValues] = useState<UniqueSelectionValue[]>([]);

  const handleAddToSelection = (color: Choice, group: SizeGroup, sku: IncludedSku) => {
    var uniqueSelectionValue = getUniqueSelectionValue(color, group, sku);
    setSelectedValues(prevSelected => [...prevSelected, uniqueSelectionValue]);
  };

  const handleClearSelection = () => {
    setSelectedValues([]);
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
    <Modal show={show} onHide={onClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>select your size(s) for {selectedItem.displayName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <LoadingSpinner />
        ) : (
          productSizeInventory?.choices.map((colorOption: Choice) => (
            <div>
              <p>{colorOption.color.displayName.toLocaleLowerCase()}</p>
              <SizeChart color={colorOption} sizeGroups={colorOption.sizeGroups} handleAddToSelection={handleAddToSelection} />
            </div>
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClearSelection}>Clear</Button>
        <WatchButton onButtonClick={onAdd} item={selectedItem} />
        <div>
          {selectedValues.map((value: UniqueSelectionValue, index: number) => (
            <div key={index}>
              {value.colorDisplayName}
              {value.groupDisplayName}
              {value.skuDisplayName}
            </div>
          ))}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const getUniqueSelectionValue = (color: Choice, group: SizeGroup, sku: IncludedSku): UniqueSelectionValue => {
  const usv: UniqueSelectionValue = {
    colorCode: color.color.code,
    colorDisplayName: color.color.displayName,
    groupCode: group.groupCode,
    groupDisplayName: group.displayName,
    skuCode: sku.skuCode,
    skuDisplayName: sku.size.displayName
  };

  return usv;
};

export default SizeSelectorPopup;
