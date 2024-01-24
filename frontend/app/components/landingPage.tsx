// LandingPage.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './searchBar';
import InventoryResultList from './inventoryResultCards';
import InventorySearchResult from '../../../shared/types/searchResponse'
import FloatingWatchList from './floatingWatchList';
import LoadingSpinner from './loadingSpinner';

const LandingPage: React.FC = () => {
  const [results, setResults] = useState<WatchedItem[]>([]);
  const [watchedItems, setWatchedItems] = useState<WatchedItem[]>([]);
  const [inventorySearchResponse, setInventorySearchResponse] = useState<InventorySearchResult>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Make your server request here
        await fetch('http://localhost:3001/posts/hi')
          .then((response) => response.json())
          .then((data) => setInventorySearchResponse(data))
          .catch((error) => console.error('Error fetching data:', error));

        // Simulate delay for demonstration purposes
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Handle response
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, []);

  const searchResults: WatchedItem[] = [
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
      setResults([])
    } else {
      setResults(searchResults);
      setWatchedItems(watchedItemData);
      setInventorySearchResponse(inventorySearchResponse);
    }
  };

  return (
    <div>
      <Container fluid className="mt-24 justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col md={9} className="text-center">
            <h1 className="display-1">nuuly wish watcher</h1>
            <h2 className="text-muted">get alerted when your nuuly items are in stock</h2>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center text-center">
          <Col>
            <label htmlFor="searchBar" className="form-label">search for nuuly items to add to your watchlist</label>
            <SearchBar onSearch={onSearch} />
            <Row>
              <Col xs={12} className="text-center mt-4">
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  // Your content to display when not loading
                  results.length > 0 &&
                  <InventoryResultList
                    results={results}
                    inventoryResults={inventorySearchResponse?.choices || []}
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <FloatingWatchList watchedItems={watchedItems}></FloatingWatchList>
    </div>
  );
};

export default LandingPage;
