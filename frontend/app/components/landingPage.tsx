// LandingPage.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import SearchBar from './searchBar';
import InventoryResultList from './searchResponseCards';
import ProductSizeInventory from '../../../shared/types/productSizeInventory'
import SearchResponse, { Product } from '../../../shared/types/searchResponse'
import FloatingWatchList from './floatingWatchList';
import LoadingSpinner from './loadingSpinner';
import * as styles from './landingPage.styles';
import NavBar from './navBar';
import WatchListCart from './watchListCart';
import SearchResponseCards from './searchResponseCards';
import UniqueSelectionValue from '../../../shared/types/uniqueSelectionValue';
import WatchList, { WatchedItem } from '../../../shared/objects/watchedItem'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LandingPage: React.FC = () => {
  const [watchedItems, setWatchedItems] = useState<WatchList>(new WatchList());
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Function to update the state
  const addItemsToWatchList = (newlyWatchedItems: UniqueSelectionValue[]) => {
    newlyWatchedItems.forEach((item: UniqueSelectionValue) => {
      var wi = new WatchedItem(item);
      watchedItems.addItemToWatchList(wi);
      console.log(watchedItems.usvs);
    });
    setWatchedItems(watchedItems);
    setExpanded(true);
  };

  const toggleWatchList = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  const clearWatchList = () => {
    setWatchedItems(new WatchList());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await fetch('http://localhost:3001/posts/search/TEST')
          .then((response) => response.json())
          .then((data) => setSearchResponse(data))
          .catch((error) => console.error('Error fetching data:', error));
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();

  }, []);

  const onSearch = (searchQuery: any) => {
    if (searchQuery == "") {
      // clear search
    } else {
      setSearchResponse(searchResponse);
    }
  };

  return (
    <div style={styles.landingPageStyles}>
      <NavBar toggleWatchList={toggleWatchList}></NavBar>
      {expanded && <WatchListCart watchedItems={watchedItems} clearWatchList={clearWatchList} />}
      <Container style={styles.landingPageStyles} fluid className="pt-24 justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col md={9} className="text-center">
            <h1 style={styles.headerTextStyles} className="display-1 mb-3">nuuly wish watcher</h1>
            <h2 style={styles.subtextStyles}>get notified when your nuuly items are in stock</h2>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center text-center">
          <Col>
            <SearchBar onSearch={onSearch} />
            <Row>
              <Col xs={12} className="text-center mt-4">
                {/* {loading ? (
                  <LoadingSpinner />
                ) : (
                  searchResponse?.products &&
                  <SearchResponseCards
                    searchResponse={searchResponse?.products || []}
                    addItemsToWatchList={addItemsToWatchList}
                  />
                )} */}
                  <SearchResponseCards
                    searchResponse={searchResponse}
                    addItemsToWatchList={addItemsToWatchList}
                  />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
