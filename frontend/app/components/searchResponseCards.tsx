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

interface SearchResponseCardsProps {
  searchResponse: Product[];
  addItemToWatchList: (item: Product) => void;
}

const SearchResponseCards = (props: SearchResponseCardsProps) => {

  const searchResponse = props.searchResponse;
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  const addItemToWatchList = (itemToAdd: Product) => {
    props.addItemToWatchList(itemToAdd);
  }

  const handleOpenPopup = () => {
    setShowPopup(true);
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
                    onClick={handleOpenPopup}/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {product.displayName}
            <SizeSelectorPopup
                      show={showPopup}
                      onClose={handleClosePopup}
                      onAdd={addItemToWatchList}
                      selectedItem={product} />
          </Col>

        ))}
      </Row>
    </Container>

  );
};

export default SearchResponseCards;

