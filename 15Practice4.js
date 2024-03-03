// answer 1
console.log("sil\"ver".length)

// answer 2
//  .includes returns true or false depending the condition
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(sentence.startsWith('quick'))
console.log(sentence.endsWith('dog.'))

// answer 3
console.log(sentence.toLowerCase())

//answer 4
let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice("Please give Rs". length))
console.log(amount)
console.log(typeof amount)