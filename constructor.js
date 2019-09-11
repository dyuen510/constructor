
// 1. 
// a Shape constructor has a 
//     name property
//     sides property
//         number
function Shape(nam,sides){
    this.name=nam;
    this.sides=sides;
};

// 2.
// a Rectangle is a shape
//     height
//     width
// on the Rectangle's prototype 
//     an area function
//     a perimeter function
// make sure to connect the Rectangle and the Shape


function Rectangle(height,width,nam,sides){
    this.height=height;
    this.width=width;
    Shape.call(this,nam,sides);
}


//Object.create lets us make copies of it. Points to the shape prototype.
//needs to be before the prototype functions or else it will overwrite it. 
Rectangle.prototype=Object.create(Shape.prototype);

Rectangle.prototype.area=function(){
    console.log(this.height*this.width);
    var w = this.width
    var area = w * this.height;
    console.log(this.name + area);
}

Rectangle.prototype.perimeter = function(){
    console.log(this.height*2 + this.width*2);
}

// 3. 
// a Square is a Rectangle
//     but if the height and width are different then set the width to be the height 

function Square(height,name,sides){
    Rectangle.call(this, height,height,name,sides)
}

Square.prototype=Object.create(Rectangle.prototype);

var r = new Rectangle(10,10,'rec',4);
r.area();
