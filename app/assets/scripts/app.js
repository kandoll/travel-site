/*node.js-------------------------- var Person = require('./modules/Person');   ---------------node.js */
import Person from './modules/Person';

alert("tklhvlkdsvkdkn");

class Adult extends Person{
    payTaxes(){
        console.log(this.name + "ows nothing");
    }
}
var john = new Person("John Doe","blue");
john.greet();

var jane = new Adult("Jane Doe","black");
jane.greet();
jane.payTaxes();

