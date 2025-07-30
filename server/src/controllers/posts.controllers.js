import { getPostModel, createPostModel, putPostModel, deletePostModel} from '../models/postModel.js'

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostModel();
        res.status(200).json(posts)
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export const createPost = async (req, res) => {
    try {
        console.log(req.body)
        let {titulo, descripcion, url, likes} = req.body;
        likes = 0;
        const newPost = await createPostModel(titulo, descripcion, url, likes);
        res.status(201).json(newPost);
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export const updateLikes = async (req, res) =>{
    try {
        const {id} = req.params;
        const actualizar = await putPostModel(id)
        res.status(200).json(actualizar)

    } catch (error) {
        console.error(`Error: ${error}`)
        
    }
}

export const deletePost = async(req,res) =>{
    try {
        const {id} = req.params;
        const deletePost = await deletePostModel(id);
        res.status(200).json(deletePost);

    } catch (error) {
        console.error(`Error: ${error}`)
        
    }
}