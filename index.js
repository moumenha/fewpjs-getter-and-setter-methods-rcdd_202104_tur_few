// Add your Circle class here

class Circle {
  constructor(radius){
    this.radius = radius;
  }
  //   set accMeasurement(accMeasurement){
  //   return 2 * Math.PI * radius;
  // }

  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return 2 * Math.PI * this.radius;
  }
  get area(){
    return Math.PI * (this.radius * this.radius);
  }
  
  //   set diameter(diameter) {
  //   this.radius =  diameter * 2;
  // }
  // set circumference(circumference) {
  //   this.radius = Math.PI * diameter;
  // }
  // set area(area){
  //   this.radius = Math.PI * (area * area);
  // }

  
}