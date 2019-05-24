/*
function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
        console.log("Hi,my name is " + this.name + " and my fav color is " + this.favoriteColor+ ".");
    }
                    }
                    
                    */


class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }
    greet() {
        console.log("Hello,my name is " + this.name + " and my fav color is " + this.favoriteColor + ".");
    }
    }

  /*node js-------------------  module.exports = Person;  ----------------------node.js */

export default Person;