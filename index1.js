
let x = 20;
let y = 30;

//console.log('Bartek');

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = {z: 1};

// Enumerate
for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key])
}

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle)
    console.log('Radius has a circle')



