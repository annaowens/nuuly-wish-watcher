// backend/routes/posts.ts
import express from 'express';
import postsController from '../controllers/postsController';
import userController from '../controllers/userController';

const router = express.Router();

// Define routes for the /posts endpoint
router.get('/search/:searchQuery', postsController.getSearchResults);
router.get('/availableSizes/:searchQuery', postsController.getSizeInventory);
router.post('/users', userController.addUser)

export default router;
