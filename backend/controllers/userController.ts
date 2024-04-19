// backend/controllers/postsController.ts
import { Request, Response } from 'express';
import ProductSizeInventory from '../../shared/types/productSizeInventory'
import SearchResponse from '../../shared/types/productSizeInventory'
import { executeQuery } from '../db/index'

const userController = {

  addUser: async (req: Request, res: Response) => {
    const userData = req.body;

    try {
        const newUser = {
            user_id: 3,
            name: 'John Doe',
            email: 'john@example.com',
        };

        // Insert user into the database
        await executeQuery('hi');
        res.status(201).json({ message: 'User added successfully' });
        
      // Send a success response
    } catch (error) {
      console.error('Error adding user:', error);
      // Send an error response
      res.status(500).json({ error: 'An error occurred while adding the user' });
    }
  },

//   getUser: async (req: Request, res: Response) => {
//     const searchQuery = req.params.searchQuery;
//     try {
//       // Call nuuly APIs
//       const response = await DataService.fetchSSRData("cozy-cloud-puffer-jacket?color=023");

//       // Convert JSON to SearchResponse type
//       const searchResponse: ProductSizeInventory | null = convertJsonToProductSizeInventory(response);

//       if (searchResponse !== null) {
//         // Handle the case where conversion was successful
//         res.status(200).json(searchResponse);
//       } else {
//         // Handle the case where jsonData was null
//         res.status(400).json({ error: 'Invalid JSON data' });
//       }
//     } catch (error) {
//       console.error('Error making external API call:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
};

export default userController;
