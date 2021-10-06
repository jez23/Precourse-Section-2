function getEvenNumbers(nums) {
  /*
    This function takes an array of integers and returns an array containing only even integers
  */

   return nums.filter(num => num % 2 === 0? true : false);
}

function flipBooleans(bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */

   return bools.map(bool => {
      return bool === true? false : true;
    })
}

function translateKey(student, keyToChange, translation) {
  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'

    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */
    
  let val = '';
  let index = null;
  const entries = Object.entries(student);

  entries.forEach((entry, i) => {
    if(entry[0] === keyToChange){
        val = entry[1];
        index = i; 
    }
  })

   let newObj = {};

    entries.forEach(tag => {
      if(tag[0] === keyToChange){
        newObj[translation] = val
      } else{
        newObj[tag[0]] = tag[1]
      }
    })

    return newObj; 
}

function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
  if(people.length < 1){
    return null;
  }
  const dentists = people.filter(person => person.isDentist? true : false);
  return dentists[0];
}

function tallyPeopleInManchester(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]

    The function should return the number of people who live in the city of Manchester
  */
    const liveInManchester = people.filter(person => {
        return person.lives.city === 'Manchester'? true : false;
    })

    return liveInManchester.length;

}

function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */
    const isItAPug = dogs.filter(owner => {
      return owner.breed === 'Pug'? true : false;
    })
    return isItAPug.map(owner => owner.owner);


}

function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };

    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)
  
    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */

  let newKeys = [];
  let newObj = {};
  let originalKeys = Object.keys(obj);

  originalKeys.forEach(key => {
    if(Array.isArray(obj[key])){
      newKeys.push(`${key}s`);
    } else{
      newKeys.push(key);
    }
  })
  newKeys.forEach((key, index) => {
    newObj[key] = obj[originalKeys[index]]
  })

return newObj;

}

function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  if(str.length < 1){
    return [];
  }
  return str.split(" ").map(word => word.length);
}

function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */
    if(words.length < 1){
      return [];
    }
    return words.filter(word => {
      if(word === word.split("").reverse().join("")){
        return true;
      }
    })

}

function replaceLettersWithXs(str) {
  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
    let newString = '';
    const regex = /^[A-Z]+$/i;

    str.split("").forEach(letter => {
        letter.match(regex) ? newString += 'X' : newString += letter;
    })
    return newString;
}

function validMobileNumber(num) {
  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
    const regEx1 = /^07\d{9}$/;
    const regEx2 = /^\+447\d{9}$/;
    const regEx3 = /^00447\d{9}$/;
    return regEx1.test(num) || regEx2.test(num) || regEx3.test(num)? true: false;
    
}

function sumDigitsFromString(str) {
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */

  
    const regEx2 = /[0-9]/gi;
    let count = 0;

    str.split("").forEach(character => {
      if(character.match(regEx2)){
        count += +character;
      }
    })
    return count;

}

function getWilliams(arr) {
  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */

   return arr.filter(name => {
      const firstAndLast = name.split(" ");
      if(firstAndLast[1] === 'Williams'){
        return true;
      }
    })

}

function getFactorials(nums) {
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]

    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
    function factorial(x) {
        if (x === 0){
          return 1;
        }
        return x * factorial(x-1);       
    }

    return nums.map(num => {
      return factorial(num)
    })

}

function largestNumber(num) {
  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */

      if(num.toString().length === 1){
        return num;
      }
      numBig = String(num).split('').sort().reverse().join('');
      if(num === +numBig){
       return num;
      } else{
        return +numBig;
      }
}

function generateMatrix(n) {
  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */

    return Array.from(Array(n), () => Array(n).fill(null))

}

function findWrongWayFruit(orchard) {
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
    if(orchard.length < 3){
      return 0;
    }

   let newObj = {};

   orchard.forEach((fruit, index) => {
     if(newObj[fruit]){
      newObj[fruit] = [
        newObj[fruit]++, index
      ];
     } else {
      newObj[fruit] = [
        1, index]
     }
   })
   
   let index = 0;
   const findOddOne = Object.keys(newObj);

   findOddOne.forEach(title => {
    if(newObj[title][0] === 1){
        index = newObj[title][1]
    }  
   })
    return index;
}

function pairDNA(dna) {
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
}

function tallyHashtagsAndMentions(str) {
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */

    if(str.length < 1){
      return {};
    }
    const regEx1 = /@/g
    const regEx2 = /#/g
    let mentions = str.match(regEx1);
    let hashtags = str.match(regEx2);

    if(mentions == null){
      mentions = [];
    }
    if(hashtags == null){
      hashtags = [];
    } 
   return {
      hashtags: hashtags.length,
      mentions: mentions.length
   }
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions
};
