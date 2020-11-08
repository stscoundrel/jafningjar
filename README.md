# Jafningjar

Compare JavaScript objects to schemas.

Shallow comparison just to check if your data looks to have correct properties. Does not care about values, only object keys.

### Install

`yarn add jafningjar`

### Usage


```javascript
const { matchesSchema } = require('jafningjar')

const book = {
  name: 'Hyperion',
  author: 'Dan Simmons',
}

const otherBook = {
  name: 'The Fall of Hyperion',
  genre: 'scifi',
}

/**
 * Properties expected for object to be "a match"
 */
const schema = {
  name: '',
  author: '',
}

console.log( matchesSchema(book, schema) ) // true
console.log( matchesSchema(otherBook, schema) ) // false

```

#### What's in the name?

"Jafningjar" comes from Old Norse word for "jafni", meaning "an equal, or a match". Jafningjar is plural of someones or somethings that are equals or peers.