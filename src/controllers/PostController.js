import { json } from "express";
import Post from "../models/Post.js";
import PostService from "../service/PostService.js";

class PostController {
    async create(req, res) {
        try {
            console.log(req.files);
            const post = await PostService.create(req.body);
            res.status(201).json(post);
        } catch (e) {
            res.status(500).json(e);
        }

    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();