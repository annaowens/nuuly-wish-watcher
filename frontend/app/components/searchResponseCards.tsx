import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SizeChart from './sizeChart';
import Image from 'react-bootstrap/Image'
import { Choice } from '../../../shared/types/productSizeInventory';
import { Product } from '../../../shared/types/searchResponse';
import { Eye } from 'react-bootstrap-icons';
import { iconStyles } from './floatingWatchList.styles';
import { Button } from 'react-bootstrap';
import WatchButton from './watchButton';

interface SearchResponseCardsProps {
  searchResponse: Product[];
  addItemToWatchList: (item: Product) => void;
}

const SearchResponseCards = (props: SearchResponseCardsProps) => {

  const searchResponse = props.searchResponse;

  const addItemToWatchList = (itemToAdd: Product) => {
    props.addItemToWatchList(itemToAdd);
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
                  <Col md={3} style={{paddingLeft:0 }}>
                    <WatchButton item={product} onButtonClick={addItemToWatchList} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  );
};

export default SearchResponseCards;

