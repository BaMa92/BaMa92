
//let schem = Number;
//console.log("Hello");


//let person = {
   // name: 'Bartek',
    //age: 32
//};

//console.log(person.age);
//function greet() {
   // console.log(person.name);
//}

//function square(number) {
    //return number*number;
//}

//console.log(square(3));


//const circle = {
//   radius: 1,
//    location: {
//       x: 1,
//        y: 1
//    },
//
//    draw: function () {
//       console.log('draw')
//    }
//
//};

//circle.draw();


//Factory function
function createCircle (radius){
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
        
    }
};

const circle = createCircle(1);

//Constructor function
function Circle (radius) {
    this.radius = radius,
    this.draw = function () {
        console.log ('draw');
    }
}

const another = new Circle();

another.draw();

circle.draw();