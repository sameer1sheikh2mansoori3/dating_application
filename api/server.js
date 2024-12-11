import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config({
    path:"./api/.env"
})

app.use(express.json())
app.use("/api/auth")
app.use("/api/user")
app.use("/api/matches")
app.use("/api/messages")
app.listen(process.env.PORT || 5000 , ()=>{
    console.log(`we are working ${process.env.PORT}`)
})
