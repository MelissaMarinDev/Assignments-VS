function Car (mk, mdl, clr){
    this.make = mk;
    this.model = mdl;
    this.color = clr;
    this.nos = function(){
      console.log('tuuuuuuuuuuurrrbo')
    };
    this.changeColor = function(newColor){
      console.log(`The color of your car was changed from ${this.color} to ${newColor}`)
      this.color = newColor;
    }
  
    
  }
  
  var corolla = new Car('Toyota', 'Corolla', 'Midnight Black')
  var tacoma = new Car('Toyota', 'Tacoma', 'Midnight Blue')
  
  console.log(corolla)
  corolla.nos()
  corolla.changeColor('Magenta')
  console.log(corolla)