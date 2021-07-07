### Tesztek
''' javascript
## // Teszt create:
fetch('http://localhost:3000/person', {
  method: "POST",
  body: JSON.stringify( {
    "first_name": "Kiss",
    "last_name": "Józsi",
    "email": "thurdman2@reverbnation.com"
}),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(r => r.json()).then(d=>console.log(d))

## // Teszt update
fetch('http://localhost:3000/person/2', {
  method: "POST",
  body: JSON.stringify( {
    "first_name": "Nagy",
    "last_name": "Pista",
    "email": "thurdman2@reverbnation.com"
}),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(r => r.json()).then(d=>console.log(d))

## // Teszt delete
fetch('http://localhost:3000/person/2', {
  method: "DELETE",  

  headers: {"Content-type": "application/json; charset=UTF-8"}
}).then(r => r.json()).then(d=>console.log(d))