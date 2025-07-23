import express from 'express'
import {auth} from '../middleware/auth.js'
import { generateArticle, generateBlogTitles, generateImage, removeBackgroundImage, removeImageObject, resumeReview } from '../controllers/aiController.js'
import { upload } from '../configs/multer.js'

const aiRouter = express.Router()

aiRouter.post('/generate-article', auth ,generateArticle)
aiRouter.post('/generate-blog-title', auth ,generateBlogTitles)
aiRouter.post('/generate-image', auth ,generateImage)
aiRouter.post('/generate-image-background',upload.single('image') , auth ,removeBackgroundImage)
aiRouter.post('/remove-image-object',upload.single('image') , auth ,removeImageObject)
aiRouter.post('/resume-review',upload.single('resume') , auth ,resumeReview)


export default aiRouter