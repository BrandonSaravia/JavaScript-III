/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Binding - binding 'this' to the window

* 2.  Implict Binding - literaly binding methods and variables in the object together using 'this'.

* 3. New Keyword Binding - lets you use functions for multiple users to keep their data by keeping a main function and creating copies
of it with different user information rather than recreating hundreds of times. This also helps reduce storage use.

* 4. Explicit Binding (functions) - lets you pass arguments into your function to add information. It can pass arguments individually
(using ".call()") or evan a whole Array (using ".Apply()" or "..."). You ca also use .bind to save your functions for later.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function wasUp(yo) {
  console.log(this);
  return `Hey bro: ${yo}.`;
}

console.log(wasUp("wasUp"));


// Principle 2

// code example for Implicit Binding

const wrapper = {
    stageName: "Eminem",
    age: 46,
    info: function () {
      return `${this.stageName} is still wrapping on stage at ${this.age} years old`
    }
  }
  
  console.log(wrapper.info());
    

// Principle 3

// code example for New Binding

function Awards(name) {
    this.name = name;
    this.grammy = function() {
      console.log(`The Grammy winner for greatest wrap song is ${this.name}`);
    }
  }
  
  const winner = new Awards('Eminem');
  const winner2 = new Awards('2Pac');
  
  winner.grammy();
  winner2.grammy();


// Principle 4

// code example for Explicit Binding

const producer = {
    name: "Marshall Bruce Mathers III"
  }
  const qualities = ["Actor","Producor","Wrapper"];
  
  // .apply() 
  function introduce(qualities1, qualities2, qualities3) {
    return `What's up my name is ${this.name} and I am a great ${qualities1}, ${qualities2}, and ${qualities3}.`;
  }
  
  console.log(introduce.apply(producer, qualities));
  
  
  // .call()
  function hello(qualities1) {
    return `What's up my name is ${this.name} and I am a great ${qualities1}.`;
  }
  
  console.log(hello.call(producer, 'wrapper'));
  
  
  // .bind()
  function introduce2(qualities1) {
    return `What's up my name is ${this.name} and I am a great ${qualities1}.`;
  }
  
  const useLater = introduce2.bind(producer, ...qualities);
  
  console.log(useLater());
  