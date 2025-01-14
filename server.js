const express=require('express')
const movies=require('./movies')
const series=require("./series")

const app=express()

app.use(express.static(__dirname+"/styles"))

app.all('/',function(req,res){
    res.render('index.ejs')
}) 


app.all('/movies',function(req,res){
    res.render('movies.ejs',{movies})
})

app.all('/series',function(req,res){
    res.render('series.ejs',{series})
})

app.all('/addmovie',function(req,res){
    res.render('addmovie.ejs')
})

const port=5000

app.listen(port,function(){
    console.log(`server running on http://127.0.0.1:${port}`)
})
