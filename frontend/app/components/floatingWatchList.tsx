// FloatingWatchList.tsx
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import * as styles from './floatingWatchList.styles';
import { Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { CaretDown, CaretUp, Eye } from 'react-bootstrap-icons';

interface WatchListProps {
    watchedItems: WatchedItem[];
}

const FloatingWatchList: React.FC<WatchListProps> = ({
    watchedItems
}) => {
    const [expanded, setExpanded] = useState(true);

    const toggleContainer = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div style={styles.floatingWatchListStyles}>
            <Container>
                <Row>
                    <Col>
                        <div style={styles.headerStyles}>watchlist</div>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'right' }}>
                        <Button
                            style={{ background: 'none', border: 'none' }}
                            onClick={toggleContainer}>
                            {expanded ?
                                <CaretDown color='red' size={30} />
                                :
                                <CaretUp color='red' size={30} />}
                        </Button>
                    </Col>
                    {expanded && (
                        <Row style={{ paddingTop: 10 }}>
                            <ul style={styles.listStyles}>
                                {watchedItems.map((item) => (
                                    <li key={item.id}>{item.title}: {item.content}</li>
                                ))}
                            </ul>
                        </Row>
                    )}
                </Row>
                {expanded && (
                    <Row className="mt-4">
                        <Col style={{ display: 'flex', justifyContent: 'right' }}>
                            <div style={styles.buttonContainerStyles}>
                                <Button
                                    style={styles.buttonStyles}
                                    variant="outline-danger">
                                    clear
                                </Button>
                                <Button
                                    style={styles.buttonStyles}
                                    variant="primary">
                                    <div style={{ display: 'flex', verticalAlign: 'center' }}>

                                        <Eye style={styles.eyeIconStyles} size={15} />
                                        watch
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default FloatingWatchList;
