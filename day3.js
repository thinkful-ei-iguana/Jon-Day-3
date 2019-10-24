'use strict';


let loaf = {
  'flour': 300,
  'water': 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());


let thisObj = {
  'foo': 321,
  'bar': 345,
  'fum': 567,
  'quux': 678,
  'spam': 789
};


for (const property in thisObj){

  console.log(`${property}: ${thisObj[property]}`);
}




let foodObj = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(foodObj.meals[3]);




let array = [

  {
    name: 'Jon',
    jobTitle: 'Student'
  },
  {
    name: 'Sheila',
    jobTitle: 'Manager',
    boss: 'Jon'
  },
  {
    name: 'Neo',
    jobTitle: 'The One',
    boss: 'Jon'
  }
];

array.forEach(function(arrayItem) {
  if (!arrayItem.boss === false){
    console.log(`${arrayItem.jobTitle} ${arrayItem.name} reports to ${arrayItem.boss}.`);
  }else{
    console.log(`${arrayItem.jobTitle} ${arrayItem.name} doesn't report to anybody.`);
  }
});


'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      // eslint-disable-next-line no-console
      console.log(this.name + ' is a ' + this.race + ' from ' + this.origin + '.');
    },
    evaluateFight: function(character){
      let dmgTaken = Math.max(0, character.attack - this.defense);
      let dmgDealt = Math.max(0, this.attack - character.defense);
    }
  };
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'wizard staff', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'Sting and Barrow Blade', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 4, 3)
];

characters[0].describe();

