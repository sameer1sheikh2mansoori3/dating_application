import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config({
    path:"./api/.env"
})
// routes has been done 
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import matchRoutes from './routes/matchRoutes.js'
import userRoutes from './routes/userRoutes.js'

app.use(express.json())
app.use("/api/auth" , authRoutes)
app.use("/api/user" , userRoutes)
app.use("/api/matches" , matchRoutes)
app.use("/api/messages" , messageRoutes)
app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`we are working ${process.env.PORT}`)
})
