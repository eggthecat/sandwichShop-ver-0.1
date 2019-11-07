// business interface

function Sandwich (size, sides) {
  this.size = size;
  this.sides = sides;
  // Automatically a number and value not determined by user
  this.price = 0;
}

Sandwich.prototype.getPrice = function () {
  this.sides.forEach(function(sides){
    this.price =+1;
  })
  if(this.size===12) {
    this.price+=5;
  } else if(this.size===6){
    this.price+=3;
  }
  return this.price;
};

// user interface
$(document).ready(function(){
  $("#submitBtn")
})
