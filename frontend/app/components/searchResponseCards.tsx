import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Product } from '../../../shared/types/searchResponse';
import WatchButton from './watchButton';
import SizeSelectorPopup from './sizeSelectorPopup';
import { Button } from 'react-bootstrap';
import EndOfResultSuggestion from './endOfResultSuggestion';

interface SearchResponseCardsProps {
  searchResponse: Product[];
  addItemToWatchList: (item: Product) => void;
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

  const addItemToWatchList = () => {
    if(selectedItem) props.addItemToWatchList(selectedItem);
  }

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {searchResponse.map((product: Product) => (
          <Col key={product.skuId}>
            <Card>
              <Card.Body>
                <Row>
                  <Image src={product.images[0]} fluid />
                </Row>
                <Row style={{ textAlign: 'left', paddingTop: 15 }}>
                  <Col md={9} >
                    <Card.Title style={{ textAlign: 'left', fontSize: 17 }}>{product.displayName}</Card.Title>
                  </Col>
                  <Col md={3} style={{ paddingLeft: 0 }}>
                    <Button
                      onClick={() => handleOpenPopup(product)} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <EndOfResultSuggestion />
      {selectedItem && (
        <SizeSelectorPopup show={showPopup} onClose={handleClosePopup} onAdd={addItemToWatchList} selectedItem={selectedItem} />
      )}
    </Container>

  );
};

export default SearchResponseCards;

