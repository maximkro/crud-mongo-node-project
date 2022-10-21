import Post from "../models/Post.js";
class PostService {
    async create(post, picture) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {

        if (!id) {
            throw new Error('id missing...');
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {

        if (!post._id) {
            throw new Error('id missing...');
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return updatedPost;
    }

    async delete(id) {

        if (!id) {
            res.status(500).json({ message: 'id missing...' });
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default new PostService();