// backend/controllers/postsController.ts
import { Request, Response } from 'express';
import DataService from '../services/nuulySearchService'
import ProductSizeInventory from '../../shared/types/productSizeInventory'
import SearchResponse from '../../shared/types/productSizeInventory'

const postsController = {

  getSearchResults: async (req: Request, res: Response) => {
    const searchQuery = req.params.searchQuery;
    try {
      // Call nuuly APIs
      const response = await DataService.fetchRegularAPIResponseData("REPLACE");

      // Convert JSON to SearchResponse type
      const searchResponse: SearchResponse | null = convertJsonToProductSizeInventory(response);

      if (searchResponse !== null) {
        // Handle the case where conversion was successful
        res.status(200).json(searchResponse);
      } else {
        // Handle the case where jsonData was null
        res.status(400).json({ error: 'Invalid JSON data' });
      }
    } catch (error) {
      console.error('Error making external API call:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getSizeInventory: async (req: Request, res: Response) => {
    const searchQuery = req.params.searchQuery;
    try {
      // Call nuuly APIs
      const response = await DataService.fetchSSRData("cozy-cloud-puffer-jacket?color=023");

      // Convert JSON to SearchResponse type
      const searchResponse: ProductSizeInventory | null = convertJsonToProductSizeInventory(response);

      if (searchResponse !== null) {
        // Handle the case where conversion was successful
        res.status(200).json(searchResponse);
      } else {
        // Handle the case where jsonData was null
        res.status(400).json({ error: 'Invalid JSON data' });
      }
    } catch (error) {
      console.error('Error making external API call:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

function convertJsonToProductSizeInventory(jsonData: JSON | null): ProductSizeInventory | null {
  // Check if jsonData is not null
  if (jsonData === null) {
    return null;
  }

  // Directly cast the non-null JSON object to SearchResponse type
  const searchResponse: ProductSizeInventory = jsonData as unknown as ProductSizeInventory;

  return searchResponse;
}

function convertJsonToSearchResponse(jsonData: JSON | null): SearchResponse | null {
  // Check if jsonData is not null
  if (jsonData === null) {
    return null;
  }

  // Directly cast the non-null JSON object to SearchResponse type
  const searchResponse: ProductSizeInventory = jsonData as unknown as ProductSizeInventory;

  return searchResponse;
}

export default postsController;
