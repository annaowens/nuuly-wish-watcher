// SearchBar.tsx
import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form className="d-flex" id="searchBar">
                        <FormControl
                            type="text"
                            placeholder="be as specific as possible..."
                            className="me-2 rounded-pill"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button className="rounded-pill" variant="outline-primary" onClick={handleSearch}>
                            search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
