const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('hi')
})


app.listen(3000,()=>{
    console.log('serving in 3000')
})