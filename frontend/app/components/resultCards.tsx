import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardList = (props: any) => {

  const data = props.results;

  return (
    <Container>
      <Row>
        {data.map((item: any) => (
          <Col key={item.id} md={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
