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


