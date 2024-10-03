const express = require ('express'); 
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const port = 3001; 
const app = express(); 



// Middlewares essenciais
app.use(cors());  
app.use(express.json()); novamente
app.use('/api', userRoutes);


//Rodar servidor
app.listen(port,()=>{
    console.log(`servidor ouvindo porta ${port}`);
});
