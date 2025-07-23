import express from 'express'
import cors from "cors"
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routers/aiRoutes.js'
import userRouter from './routers/userRoutes.js'
import connectCloudinary from './configs/cloudinary.js'

const app = express()

await connectCloudinary()

app.use(cors())
app.use(express.json())

// ✅ Add Clerk middleware — this will populate req.auth
app.use(clerkMiddleware())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send("Server is Live!")
})

// ✅ Secure the routes with requireAuth
app.use('/api/ai', requireAuth(), aiRouter)
app.use('/api/user', requireAuth(), userRouter)

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})
