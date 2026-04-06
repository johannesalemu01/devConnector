const  express = require('express')
const connectDB=require('./config/db')

const userRoute=require('./routes/api/users')
const authRoute=require('./routes/api/auth')
const profileRoute=require('./routes/api/profile')
const postRoute=require('./routes/api/posts')

const app = express()


//conect database
connectDB();

const PORT=process.env.PORT || 5000
app.get('/', (req, res) => res.send('Hello World!'))

//Define Routes

app.use('/api/users',userRoute)
app.use('/api/profile',profileRoute)
app.use('/api/posts',postRoute)
app.use('/api/auth',authRoute)

app.listen(PORT, () => console.log(`server started on port ${PORT}!`)) 