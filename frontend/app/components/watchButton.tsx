import React from 'react';
import { Button } from 'react-bootstrap';
import { Product } from '../../../shared/types/searchResponse';
import { iconStyles } from './floatingWatchList.styles';
import { Eye } from 'react-bootstrap-icons';
import { watchButtonStyles } from './watchButton.styles';

interface WatchButtonProps {
  onButtonClick: (item: Product) => void;
}

const WatchButton: React.FC<WatchButtonProps> = ({ onButtonClick }) => {
  return (
    <div>
      <Button onClick={() => onButtonClick} style={watchButtonStyles}>
        <Eye size={20} />
      </Button>
    </div>
  );
};

export default WatchButton;
