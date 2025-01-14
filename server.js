const express=require('express')
const movies=require('./movies')
const series=require("./series")

const app=express()

app.use(express.static(__dirname+"/styles"))

app.use(express.urlencoded({extended:true}))


app.use(function(req,res,next){
    req.user="user"
    next()
})

app.get('/',function(req,res){
    console.log(req.user)
    res.render('index.ejs')
}) 


app.get('/movies',function(req,res){
    console.log(req.user)
    res.render('movies.ejs',{movies}) 
})


app.get('/series',function(req,res){
    console.log(req.user)
    res.render('series.ejs',{series})
})

app.get('/addmovie',function(req,res){
    res.render('addmovie.ejs')
})
app.post('/newmovie',function(req,res){
  const newItem={...req.body,id:Math.floor(Math.random()*1000)}

  if(   newItem.type=="movie"){
    movies.push(newItem)
    res.redirect('/movies')
  }
  else{
    series.push(newItem)
    res.redirect('/series')
  }
})


app.get('/movies/:idMovie',function(req,res){
    console.log(req.params)
    const movie=movies.find((movie)=>movie.id==req.params.idMovie)
    res.render('singleItem.ejs',{movie}) 
})

const port=5000

app.listen(port,function(){
    console.log(`server running on http://127.0.0.1:${port}`)
})
