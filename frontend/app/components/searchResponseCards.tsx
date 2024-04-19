import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import SearchResponse, { Product } from '../../../shared/types/searchResponse';
import WatchButton from './watchButton';
import SizeSelectorPopup from './sizeSelectorPopup';
import EndOfResultSuggestion from './endOfResultSuggestion';
import { cardTitleStyles, imageStyles, searchCardBodyStyles, searchCardStyles } from './searchResponseCards.styles';
import UniqueSelectionValue from '../../../shared/types/uniqueSelectionValue';
import Skeleton from 'react-loading-skeleton';
import { Button } from 'react-bootstrap';


interface SearchResponseCardsProps {
  searchResponse?: SearchResponse;
  addItemsToWatchList: (watchedItems: UniqueSelectionValue[]) => void;
}

const SearchResponseCards = (props: SearchResponseCardsProps) => {

  const searchResponse = props.searchResponse;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);

  const handleOpenPopup = (selectedItem: Product) => {
    setSelectedItem(selectedItem);
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const addItemToWatchList = (items: UniqueSelectionValue[]) => {
    if (selectedItem) props.addItemsToWatchList(items);
  }

  return (
    <Container>
      <Row xs={2} sm={3} md={4} lg={5} className="g-4">
        { !searchResponse?.products ? (
          // Render skeleton loading cards when loading is true
          Array.from({ length: 12 }).map((_, index) => (
            <Col key={index}>
              <Card style={searchCardStyles}>
                <Card.Body style={searchCardBodyStyles}>
                  <Row>
                    <Skeleton height={180} width={150} style={imageStyles} />
                  </Row>
                  <Row style={{ height: 70, overflow: 'hidden' }}>
                    <Skeleton count={2} style={{ margin: 20 }} />
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          // Render actual cards when loading is false
          props.searchResponse?.products.map((product: Product) => (
            <Col key={product.choiceId}>
              <Card onClick={() => handleOpenPopup(product)} style={searchCardStyles}>
                <Card.Body style={searchCardBodyStyles}>
                  <Row>
                    <Image src={product.images[0]} style={imageStyles} />
                    <WatchButton onButtonClick={handleOpenPopup} item={product} />
                    {/* <Button style={watchButtonStyles} /> */}
                  </Row>
                  <Row style={{ height: 50, overflow: 'hidden', padding: 10 }}>
                    <p style={cardTitleStyles}>{product.displayName}</p>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <EndOfResultSuggestion />
      {selectedItem && (
        <SizeSelectorPopup show={showPopup} onClose={handleClosePopup} onAdd={addItemToWatchList} selectedItem={selectedItem} />
      )}
    </Container>
  );
};

export default SearchResponseCards;

