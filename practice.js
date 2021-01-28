// Best in Show
const favoriteDogBreed = (breed) => {
    if (breed === "meow") {
        const cats = `I like cats`
        return cats
    } else {
    const other = `my favorite dog breed is ${breed}`
    return other
    }
}

const myFavorite = favoriteDogBreed("meow")

// console.log(`When it comes to pets, ${myFavorite}`)
console.log(myFavorite)


// Addition
const add = (num2, num1, num3) => {
    return num1 + num2 +num3;
}

console.log(add(17, 4, 11))


// Self-Driving Cars
const go = (direction, speed) => {
    console.log(`The car is moving ${direction} at ${speed} mph.`)

    if (speed > 75) {
        console.log(`SLOW DOWN!`)
    }
}

go("sideways", 83)
go("up", 22)


// Evens or Odds
const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return `Even`
    } else {
        return `Odd`
    }
}

const arrayOfNumbers = [73, 54, 89, 651, 0]
for (const num of arrayOfNumbers) {
    console.log(evenOrOdd(num))
}


// Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filter = () => {
    const wordsINeed = []
    for (const word of words) {
        if (word.startsWith("k") === false) {
            wordsINeed.push(word)
        }
    }
    return wordsINeed
}

const join = (arrayOfStrings) => {
    return arrayOfStrings.join(" ")
}

const filtered = filter()
console.log(join(filtered))


// You Can Tune a Piano
const catchFish = () => {
    if (Math.random() * 3 < 1) {
        console.log("Sven hooked a tuna!  :)")
    } else {
        console.log("Sven came up empty-handed.  :(")
    }
}
catchFish()


// Fast Food
const orderMeal = (Sandwich, Side, Drink, Dessert) => {
    return {
        sandwich: Sandwich,
        side: Side,
        drink: Drink,
        dessert: Dessert
    }
}

const takeOutBag = orderMeal("Ultimate Slammer", "Potato wedges", "Mr. Pepper", "Fudge sundae")


// Same Chores, Different Days
// Lightning Exercise
const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}

const cube = number => number * number * number

const number = 7
const cubedNumber = bigify(number, cube)  // 343

// Defining Chores
const don = {
    firstName: "Donald",
    lastName: "McLelland"
}

const sweep = person => `${person.firstName} ${person.lastName} sweeps`
const doDishes = person => `${person.firstName} ${person.lastName} does dishes`
const groceryShopping = person => `${person.firstName} ${person.lastName} goes grocery shopping`
const washDog = person => `${person.firstName} ${person.lastName} washes the dog`
const laundry = person => `${person.firstName} ${person.lastName} does laundry`
const clean = person => `${person.firstName} ${person.lastName} cleans`

const dayPlanner = (chore1, chore2, chore3, person, day) => {
    return `On ${day}, ${chore1(person)}, and 
    ${chore2(person)}, and
    ${chore3(person)}`
}

console.log(dayPlanner(sweep, washDog, laundry, don, "Thursday"))
