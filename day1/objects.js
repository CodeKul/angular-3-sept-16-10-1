'use script'

var myObj1 = {
  name : 'Tiger',
  age : 12,

  getAge : function(){
    return this.age;
  }
};

var myObj2 = Object.create(Object.prototype);
Object.defineProperty(myObj2,'name',{
  writable:false,
  value:'Mercedez'
});

myObj2.name = 'Audi';
myObj2.city ='Pune'
console.log('Obj2 Name - '+myObj2.name);
console.log('Obj2 City - '+myObj2.city);

function Animal(name,age){
  this.name = name;
  this.age = age; // state

  this.getAge = function(){ // member function
    return this.age;
  }

  this.getName = function(){
    return this.name;
  }
};

Animal.prototype.toString = function(){
    return 'Name - '+this.name +' Age - '+this.age;
};

var myObj3 = new Animal('Tiger',12);
console.log('Tiger - '+myObj3.toString());

var myObj5 = new Animal('Elephant',34);
console.log('Elephant - '+myObj5.toString());

var myObj4 = new Object();
