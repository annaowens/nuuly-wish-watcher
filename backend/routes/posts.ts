// backend/routes/posts.ts
import express from 'express';
import postsController from '../controllers/postsController';

const router = express.Router();

// Define routes for the /posts endpoint
router.get('/', postsController.getAllPosts);
router.get('/:searchQuery', postsController.getSearchResults);
router.post('/', postsController.createPost);
router.put('/:postId', postsController.updatePost);
router.delete('/:postId', postsController.deletePost);

export default router;
