// backend/routes/posts.ts
import express from 'express';
import postsController from '../controllers/postsController';

const router = express.Router();

// Define routes for the /posts endpoint
router.get('/search/:searchQuery', postsController.getSearchResults);
router.get('/availableSizes/:searchQuery', postsController.getSizeInventory);

export default router;
