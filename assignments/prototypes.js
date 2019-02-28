/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

const damageDealt = [0, 25, 50, 75]

class GameObject{
  constructor(player){
  this.createdAt = player.createdAt;
  this.name = player.name;
  this.dimensions = player.dimensions;
  }
  destroy() {
  return `${this.name} was removed from the game.`;
  }
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject{
  constructor(stats){
    super(stats);
    this.healthPoints = stats.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats{
  constructor(attributes){
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  
  spank(Humanoid1, Humanoid2) {
  
    var spanky = damageDealt[Math.floor(Math.random() * damageDealt.length)];
    console.log(Humanoid1.name + " spanks " + Humanoid2.name + ' with a hit of :' + spanky);
    Humanoid2.healthPoints = Humanoid2.healthPoints - spanky;
    if (Humanoid2.healthPoints <= 0) {
      console.log(Humanoid2.name + ' died sucka');
    }else{
    
      console.log(Humanoid2.name + ' says, "im still breathin boiiii" HP: ' + Humanoid2.healthPoints)
    
    }
  }
}


//hero
class Hero extends Humanoid{
  constructor(abilities){
    super(abilities);
    this.specialMove = abilities.specialMove;
    this.speedPotion = abilities.speedPotion;
  }
  attack() {
    return `${this.name} deals ${this.specialMove} damage to enemy!`;
  }
  
  speedpotion() {
    return `${this.name} used a ${this.speedPotion}!`;
  }
}



//villian
class Villain extends Humanoid{
  constructor(abilities){
    super(abilities);
    this.specialMove = abilities.specialMove;
  }
  attack() {
    return `${this.name} deals ${this.specialMove} damage to Challenger!`;
  }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 100,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 100,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 3,
  },
  healthPoints: 100,
  name: 'Biondi',
  team: 'The Round Table',
  weapons: [
    'Long Sword',
    'Small Crossbow',
  ],
  language: 'silence',
  specialMove: '25',
  speedPotion: 'Speed Potion',
});

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 4,
    height: 6,
  },
  healthPoints: 100,
  name: 'Josh Knell',
  team: 'Lamdba',
  weapons: [
    'Bango',
    'Keyboard',
  ],
  language: 'Lymrics',
  specialMove: '30',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

console.log("---------------------------")

while(villain.healthPoints > 0 && hero.healthPoints > 0){
  if (villain.healthPoints > 0 && hero.healthPoints > 0){
      villain.spank(villain,hero);
  }
  if (villain.healthPoints > 0 && hero.healthPoints > 0){
      hero.spank(hero,villain);
  }
}


console.log("---------------------------")

console.log(hero.createdAt);
console.log(hero.dimensions);
console.log(hero.healthPoints);
console.log(hero.name);
console.log(hero.team);
console.log(hero.weapons);
console.log(hero.language);

console.log(villain.createdAt);
console.log(villain.dimensions);
console.log(villain.healthPoints);
console.log(villain.name);
console.log(villain.team);
console.log(villain.weapons);
console.log(villain.language);

console.log("From before time. when unicorns reigned free. The fight begins that changes everyones past.")
console.log("Battle!!!")
console.log(villain.greet());
console.log(hero.greet());

console.log(villain.attack());
console.log(hero.takeDamage());
console.log(hero.speedpotion());
console.log(hero.attack());
console.log(villain.takeDamage());
console.log(hero.attack());
console.log(villain.takeDamage());
console.log(villain.destroy());















