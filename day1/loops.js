var cities = ['Pune','Sangli','Kolhapur','Nagpur','Mumbai'];

var loops = {
  simple : function(iterator){
    for(var i = 0; i < iterator.length; i++)
      console.log('City - '+cities[i]);
  },
  forEach : function(iterator){
    iterator.forEach(function(element, index){
      console.log('Element - '+element +' Index - '+index);
    });
  },
  forIn : function(obj){
    for (var property in obj) {
      console.log('Property - '+property+' Value - '+obj[property]);
    }
  },
  forOf : function(iterator){
    for (value of iterator) {
      console.log('Value - '+value);
    }
  }
};

//loops.simple(cities);
//loops.forEach(cities);
var car = new Object();
car.city = 'Pune';
car.price = 12000;
loops.forIn(cities);

var animal = {
  jungle : 'Dense',
  type : 'Harbivorase'
};

//loops.forIn(animal);
loops.forOf(cities);
