// WatchList.tsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import * as styles from './watchList.styles';
import { Row } from 'react-bootstrap';
import classNames from 'classnames';

interface WatchListProps {
    watchedItems: WatchedItem[];
}

const WatchList: React.FC<WatchListProps> = ({
    watchedItems
}) => {
    return (
        <Container style={styles.containerStyles}>
            <Row>
                <div style={styles.headerStyles}>watchlist</div>

                <div style={styles.subTextStyles}>items you're wanting</div>

                <ul style={styles.listStyles}>
                    {watchedItems.map((item) => (
                        <li key={item.id}>{item.title}: {item.content}</li>
                    ))}
                </ul>
            </Row>
            <Row className="mt-4">
                <div style={styles.buttonContainerStyles}>
                    <Button 
                        variant="secondary" 
                        className={styles.buttonClass} 
                        style={styles.buttonStyles}>
                        clear
                    </Button>
                    <Button 
                        variant="outline-primary" 
                        className={classNames(styles.buttonClass, styles.watchNowButtonStyles)}
                        style={styles.buttonStyles}>
                        watch items
                    </Button>
                </div>
            </Row>
        </Container>
    );
};

export default WatchList;
