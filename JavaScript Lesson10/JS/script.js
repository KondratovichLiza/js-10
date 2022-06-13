// 1)




// 2)

let drivers = ["Dominic", "Brian", "Letty", "Roman"]
let antagonists = ["Deckard", "Luke"]



// concat

let family = []
console.log(family.concat(drivers, antagonists))

// push

let family = []

family.push(...drivers, ...antagonists);
console.log(family);

// spread

let family = [...drivers, ...antagonists]

console.log(family);

// splice

let family = []

family.splice(0, 0, ...drivers, ...antagonists)

console.log(family);

// forEach

let family = []

drivers.forEach(arr => {
    family.push(arr)
})

antagonists.forEach(arr => {
    family.push(arr)
})

console.log(family);

// 3)

let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"]

let filteredCars = [...new Set(cars)];
console.log(filteredCars);

// 4)

function nameCity(country) {
    return function(city) {
        return [country, city]
    }
}

let country = nameCity('Belarus')
console.log(country('Minsk'));

// 5)

let newDate = Date.now();
console.log(new Date(1654420481877));

let date = new Date()
console.log(date.getFullYear(1654420481877) + '/' + date.getMonth(1654420481877) + '/' + date.getDate(1654420481877) + '(' + date.getMinutes(1654420481877) + ":" + date.getSeconds(1654420481877) + ')');