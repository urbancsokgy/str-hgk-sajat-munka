const { get, getAll, create, update, remove } = require('./utils')



const cars = [{
    "id": 1,
    "model": "Pathfinder",
    "maker": "Nissan",
    "year": 2005,
    "color": "Maroon",
    "price": 22277
}, {
    "id": 2,
    "model": "Camaro",
    "maker": "Chevrolet",
    "year": 2010,
    "color": "Indigo",
    "price": 46525
}, {
    "id": 3,
    "model": "Karif",
    "maker": "Maserati",
    "year": 1989,
    "color": "Turquoise",
    "price": 45379
}, {
    "id": 4,
    "model": "850",
    "maker": "Volvo",
    "year": 1993,
    "color": "Indigo",
    "price": 49274
}, {
    "id": 5,
    "model": "Savana 3500",
    "maker": "GMC",
    "year": 2002,
    "color": "Red",
    "price": 23178
}, {
    "id": 6,
    "model": "LS",
    "maker": "Lexus",
    "year": 1996,
    "color": "Crimson",
    "price": 35100
}, {
    "id": 7,
    "model": "Galant",
    "maker": "Mitsubishi",
    "year": 2006,
    "color": "Blue",
    "price": 42212
}, {
    "id": 8,
    "model": "Range Rover",
    "maker": "Land Rover",
    "year": 2003,
    "color": "Teal",
    "price": 13044
}, {
    "id": 9,
    "model": "Truck",
    "maker": "Mitsubishi",
    "year": 1996,
    "color": "Violet",
    "price": 24106
}, {
    "id": 10,
    "model": "Sentra",
    "maker": "Nissan",
    "year": 2003,
    "color": "Crimson",
    "price": 32390
}];


update(cars, {
    "id": 7,
    "model": "Cordia",
    "year": 2001,
    "color": "orange",
    "price": 5000
});

console.log(get(cars, 11))
create(cars, { "model": 'SuperB', "maker": 'Skoda', "year": 2000, "color": 'White', "price": 60000 })

update(cars,
    {
        model: 'SXC',
        maker: 'Suzuki',
        year: 1563,
        color: 'black',
        price: 60000
    }, 5)
remove(cars, 6)
create(cars, {
    "model": "308",
    "maker": "Peugeot",
    "year": 2003,
    "color": "Crimson",
    "price": 32390
})