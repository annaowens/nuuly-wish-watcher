// backend/controllers/postsController.ts
import axios from 'axios';
import { Request, Response } from 'express';
import DataService from '../services/nuulySearchService'
import { SearchResponse } from '../models/searchResponse';

const postsController = {
  getAllPosts: (req: Request, res: Response) => {
    // Logic to get all posts
    res.json({ message: 'Getting all posts' });
  },

  getPostById: (req: Request, res: Response) => {
    const postId = req.params.postId;
    // Logic to get a specific post by ID
    res.json({ message: `Getting post with ID ${postId}` });
  },

  createPost: (req: Request, res: Response) => {
    // Logic to create a new post
    res.json({ message: 'Creating a new post' });
  },

  updatePost: (req: Request, res: Response) => {
    const postId = req.params.postId;
    // Logic to update a specific post by ID
    res.json({ message: `Updating post with ID ${postId}` });
  },

  deletePost: (req: Request, res: Response) => {
    const postId = req.params.postId;
    // Logic to delete a specific post by ID
    res.json({ message: `Deleting post with ID ${postId}` });
  },

  getSearchResults: async (req: Request, res: Response) => {
    const searchQuery = req.params.searchQuery;
    try {
      // Call nuuly APIs
      const response = await DataService.fetchDataWithInitialState("twist-halter-maxi-dress");

      // Convert JSON to SearchResponse type
      const searchResponse: SearchResponse | null = convertJsonToSearchResponse(response);

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

function convertJsonToSearchResponse(jsonData: JSON | null): SearchResponse | null {
  // Check if jsonData is not null
  if (jsonData === null) {
    return null;
  }

  // Directly cast the non-null JSON object to SearchResponse type
  const searchResponse: SearchResponse = jsonData as unknown as SearchResponse;

  return searchResponse;
}

export default postsController;
