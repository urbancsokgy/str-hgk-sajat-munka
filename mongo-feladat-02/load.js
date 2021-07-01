var db=connect('127.0.0.1/videoStore')
var directors=[
    {
        "_id": 0,
        "name": "Steven Spielberg",
        "birthYear": 1942,
        "movies": []
    },
    {
        "_id": 0,
        "name": "Clint Eastwood", 
        "birthYear": 1942,
        "movies": []
    },
    {
        "_id": 0,
        "name": "James Cameron",
        "birthYear": 1942,
        "movies": []
    }
]
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }  
  
  

for (let i = 0  ; i <directors.length ; i++) {
directors[i]._id=i+1;
directors[i].birthYear=randomIntFromInterval(1945, 1988);

print(directors[i])   
db.directors.insertOne(directors[i])
      
}

// rendezők átírása
// rendezők átírása
var dir=db.getCollection('directors').find({})
var i=1
var y=1
dir.forEach((director) => {
    print(i,'.',y, director.name)
    var mov=db.movies.find()    
    mov.forEach((movie) => {
        print(y,'Movie director', director._id, ':', movie._id.toString())
        if(director.name==movie.director){
            db.directors.updateOne({_id: director._id}, {$push: {movies: movie._id.toString()}})
            print(director.name,"==",movie.director, 'dir id: ', director.id, '')
            y++
        }
    })
i++
})

db.getCollection('movies').find({})
db.getCollection('movies').updateMany({}, {$unset :{movies: ""}})

db.getCollection('movies').find({
    $or: 
    [
    {category: {$eq: "fantasy"}},
    { category: {$eq: "action"}}
     
     ]})

     var mov=db.getCollection('movies').find({})
     mov.forEach(data=>{
     var id=data._id
     print(id)
      db.getCollection('movies').updateMany
      ({_id: id}, {$set: {releaseYear: randomIntFromInterval(1981,1999)}})
      })
      db.getCollection('movies').find({})

      db.getCollection('movies').find({
        $and: [
        {releaseYear: {$gt: 1983}},
        {releaseYear: {$lt: 1995}}
        ]}).sort({releaseYear: 1})