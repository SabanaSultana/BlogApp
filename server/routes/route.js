import express from "express";
import { signUp } from "../controllers/user.js";

const router = express.Router();

router.post("/", signUp);
// const {dummyLink}=require("../controllers/likeController")
const {createComment}=require("../controllers/commentController")
const {createPost}=require("../controllers/postController")
const {getPostData}=require("../controllers/postController")
const {createLike}=require("../controllers/likeController")
const {removeLike}=require("../controllers/likeController")
// mapped controller with router
// router.get("/dummyroute",dummyLink)
router.post("/createcomments",createComment)
router.post("/create/posts",createPost)
router.get("/get/posts",getPostData)
router.post("/create/like",createLike)
router.post("/remove/likee",removeLike)

// exports  router

export default router;
