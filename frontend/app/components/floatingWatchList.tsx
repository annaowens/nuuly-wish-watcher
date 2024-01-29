// FloatingWatchList.tsx
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import * as styles from './floatingWatchList.styles';
import { Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { Eye, ChevronCompactUp, ChevronCompactDown } from 'react-bootstrap-icons';
import { Product } from '../../../shared/types/searchResponse';
import { watch } from 'fs';

interface WatchListProps {
    watchedItems: Product[];
    clearWatchList: () => void;
}

const FloatingWatchList: React.FC<WatchListProps> = ({
    watchedItems,
    clearWatchList
}) => {
    const [expanded, setExpanded] = useState(true);

    const handleClearButtonClick = () => {
        clearWatchList();
    }

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
                                <ChevronCompactDown style={styles.iconStyles} size={30} />
                                :
                                <ChevronCompactUp style={styles.iconStyles} size={30} />}
                        </Button>
                    </Col>
                    {expanded && (
                        <Row style={{ paddingTop: 10 }}>
                            <ul style={styles.listStyles}>
                                {watchedItems.map((item) => (
                                    <li key={item.productSlug}>{item.displayName}</li>
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
                                    onClick={handleClearButtonClick}
                                    variant="outline-danger">
                                    clear
                                </Button>
                                <Button
                                    style={styles.buttonStyles}
                                    variant="primary">
                                    <div style={{ display: 'flex', verticalAlign: 'center' }}>
                                        <Eye style={styles.iconStyles} size={15} />
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
