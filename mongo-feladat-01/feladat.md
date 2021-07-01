var db=connect('127.0.0.1/videoStore')
//use videoStore
db.createCollection("movies", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "title", "category", "director" ],
         properties: {
            title: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            category: {
                enum: [ "fantasy", "action", "romantic", null ],
            
               description: "must be from: fantasy, action, romantic"
            },
            director: {
               enum: ["Steven Spielberg", "Clint Eastwood", "James Cameron", null ],
               description: "must be from: Steven Spielberg, Clint Eastwood, James Cameron"
            }
            }
         }
      }
   }
)

db.movies.insertMany([{
  "title": "Hangover Square",
  "category": "action",
  "director": "James Cameron"
}, {
  "title": "United Red Army (Jitsuroku Rengo Sekigun: Asama sanso e no michi)",
  "category": "action",
  "director": "Steven Spielberg"
}, {
  "title": "Kingpin",
  "category": "fantasy",
  "director": "James Cameron"
}, {
  "title": "Mount St. Elias",
  "category": "fantasy",
  "director": "Clint Eastwood"
}, {
  "title": "Possessed",
  "category": "fantasy",
  "director": "Clint Eastwood"
}, {
  "title": "Soylent Green",
  "category": "action",
  "director": "James Cameron"
}, {
  "title": "Men of Respect",
  "category": "romantic",
  "director": "James Cameron"
}, {
  "title": "Gravity",
  "category": "fantasy",
  "director": "Clint Eastwood"
}, {
  "title": "Taking Sides",
  "category": "action",
  "director": "Steven Spielberg"
}, {
  "title": "China Seas",
  "category": "fantasy",
  "director": "Clint Eastwood"
}]);

use videoStore
db.movies.updateMany(
    {},
    {$set: {ratings: []}}
)
db.getCollection('movies').updateMany({category : "fantasy"}, {$set: {ratings: 3}})

use videoStore
db.movies.updateMany(
    {},
    {$set: {releaseYear: 2000}}
)

db.movies.updateMany( {}, [{$set: {title: {$toUpper: "$title"} }}] )