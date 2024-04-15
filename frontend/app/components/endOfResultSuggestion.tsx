// EndOfResultSuggestion.tsx
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import * as styles from './landingPage.styles';


const EndOfResultSuggestion: React.FC = () => {
    function scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling behavior
        });
    }

    return (
        <Container className="m-5">
            <Row>
                <Col>
                    <h1 style={styles.subtextStyles}>didn't find what you were looking for? try a more specific search. exact product name is best :) </h1>
                    <Button style={styles.buttonStyles} className="rounded-pill" variant="outline-primary" onClick={scrollToTop}>
                        back to top
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default EndOfResultSuggestion;
