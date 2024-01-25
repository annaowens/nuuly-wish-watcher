import React from 'react';
import { Button } from 'react-bootstrap';
import { Product } from '../../../shared/types/searchResponse';

interface WatchButtonProps {
  item: Product;
  onButtonClick: (itemId: Product) => void;
}

const WatchButton: React.FC<WatchButtonProps> = ({ item, onButtonClick }) => {

  const handleClick = () => {
    onButtonClick(item);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default WatchButton;
