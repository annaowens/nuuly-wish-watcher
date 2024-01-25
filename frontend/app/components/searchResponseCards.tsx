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
      <Row>
        {searchResponse.map((product: Product) => (
          <Col key={product.skuId} md={12}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Row>
                  <Col md={2}>
                  <Image src={product.images[0]} fluid />
                  </Col>
                  <Col md={10}>
                    <Row>
                    <Card.Title style={{textAlign:'left', padding:10}}>{product.displayName}</Card.Title>
                    </Row>
                    {/* <Row>
                    <SizeChart sizeGroups={searchResponse[0].sizeGroups}></SizeChart>
                    </Row> */}
                    <WatchButton
                    item={product}
                    onButtonClick={addItemToWatchList} />
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

