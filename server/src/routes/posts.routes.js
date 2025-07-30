import { Router } from "express";
import {getAllPosts, createPost, updateLikes, deletePost} from '../controllers/posts.controllers.js'

const router = Router();

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.put('/posts/like/:id', updateLikes )
router.delete('/posts/:id', deletePost)

export default router;