// backend/controllers/postsController.ts
import axios from 'axios';
import { Request, Response } from 'express';
import DataService from '../services/nuulySearchService'

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
        // Make an API call using axios
        const response = await DataService.fetchDataWithInitialState("twist-halter-maxi-dress").then((initialStateLine) => {
          return initialStateLine;
        });

        console.log(response);

        // Process the external data or send it to the client
        res.json({ response });
      } catch (error) {
        console.error('Error making external API call:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }
};

export default postsController;
