const express=require('express');
const app=express();
const astrologerRoutes=require('./routes/astrologerRoutes');
const userRoutes=require('./routes/userRoutes');

app.use(express.json());
app.use('/api', astrologerRoutes);
app.use('/api', userRoutes);

const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});