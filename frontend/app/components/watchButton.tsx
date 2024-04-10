import React from 'react';
import { Button } from 'react-bootstrap';
import { Product } from '../../../shared/types/searchResponse';
import { iconStyles } from './floatingWatchList.styles';
import { Eye } from 'react-bootstrap-icons';
import { watchButtonStyles } from './watchButton.styles';

interface WatchButtonProps {
  item: Product;
  onButtonClick: (itemId: Product) => void;
}

const WatchButton: React.FC<WatchButtonProps> = ({ item, onButtonClick }) => {

  const handleWatchClick = () => {
    onButtonClick(item);
  };

  return (
    <div>
      <Button onClick={handleWatchClick} style={watchButtonStyles}>
        <Eye size={20} />
      </Button>
    </div>
  );
};
export default WatchButton;