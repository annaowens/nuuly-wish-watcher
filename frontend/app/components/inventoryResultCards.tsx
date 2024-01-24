import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SizeChart from './sizeChart';
import Image from 'react-bootstrap/Image'
import { Choice } from '../../../shared/types/searchResponse';

interface InventoryResultCardsProps {
  results: WatchedItem[];
  inventoryResults: Choice[];
}

const InventoryResultCards = (props: InventoryResultCardsProps) => {

  const data = props.results;
  const inventoryResults = props.inventoryResults;

  return (
    <Container>
      <Row>
        {data.map((item: any) => (
          <Col key={item.id} md={12}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Row>
                  <Col md={2}>
                  <Image src={inventoryResults[0].imageUrls[0]} fluid />
                  </Col>
                  <Col md={10}>
                    <Row>
                    <Card.Title style={{textAlign:'left', padding:10}}>{item.title}</Card.Title>
                    </Row>
                    <Row>
                    <SizeChart sizeGroups={inventoryResults[0].sizeGroups}></SizeChart>
                    </Row>
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

export default InventoryResultCards;
