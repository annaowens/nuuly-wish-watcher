// LandingPage.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './searchBar';
import CardList from './resultCards';
import WatchList from './watchList';

const LandingPage: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [watchedItems, setWatchedItems] = useState<WatchedItem[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const searchResults: SearchResult[] = [
    { id: 1, title: 'item 1', content: 'Results for card 1.' },
    { id: 2, title: 'item 2', content: 'Results for card 2.' },
    { id: 3, title: 'item 3', content: 'Results for card 3.' },
    // Add more data as needed
  ];

  const watchedItemData: WatchedItem[] = [
    { id: 1, title: 'item 1', content: 'Results for card 1.' },
    { id: 2, title: 'item 2', content: 'Results for card 2.' },
    { id: 3, title: 'item 3', content: 'Results for card 3.' },
    // Add more data as needed
  ];

  const onSearch = (searchQuery: any) => {
    if (searchQuery == "") {
      setResults([]);
    } else {
      setResults(searchResults);
      setWatchedItems(watchedItemData);
    }
  };

  return (
    <Container fluid className="mt-24 justify-content-center align-items-center">
      <Row className="justify-content-center">
        <Col md={9} className="text-center">
          <h1 className="display-1">nuuly wish watcher</h1>
          <h2 className="text-muted">get alerted when your nuuly items are in stock</h2>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center text-center">
        <Col md={6}>
          <label htmlFor="searchBar" className="form-label">search for nuuly items to add to your watchlist</label>
          <SearchBar onSearch={onSearch} />
          <Row>
            <Col xs={12} className="text-center mt-4">
              {
                results.length > 0 &&
                <CardList
                  results={results}
                />
              }
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <WatchList watchedItems={watchedItems} />
          <div>
      <h1>Hello from Next.js</h1>
      <p>{message}</p>
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
