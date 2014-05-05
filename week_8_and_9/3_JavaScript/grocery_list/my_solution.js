// U3.W8-9: 


// I worked on this challenge with Aki Suzuki

// 2. Pseudocode

// # CREATE OBJECT called grocerylist
// #   Create array called grocerylist
// #   CREATE PROPERTY add which takes arguments item & quantity
// #     Adds item/quantity to array
// #   CREATE PROPERTY delete which takes argument item 
// #     Delete item from array
// #   CREATE PROPERTY display
// #     Print item and quantity to console

// 3. Initial Solution

// function GroceryList(item, qty, price){
//    this.item = item;
//    this.qty = qty;
//    this.price = price;
//    this.list = [[item,qty,price]]
// }

// // Add methods like this.  All Person objects will be able to invoke this
// GroceryList.prototype.add = function(item, qty, price){
//      this.list.push([item,qty,price])
// };
// GroceryList.prototype.delete = function(item){
// 	for (var i = 0; i < this.list.length; i++) {
// 	  if (item === this.list[i][0])
// 	    this.list.splice(i,1);
// 	};
// };

// GroceryList.prototype.display = function(){
// 	console.log("Item, Quantity, Price");
// 	for (var i = 0; i < this.list.length; i++){
// 	 console.log(this.list[i][0].toString() + ", " + this.list[i][1] + ", " + this.list[i][2]);
// 	};
// };

// // 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

// var mylist = new GroceryList("eggs", 1, 4.99);
// mylist;
// mylist.add("juice", 2, 10.99);
// mylist.add("milk", 1, 2.99);
// mylist.delete("milk");
// mylist.display();


// 4. Refactored Solution
function groceryList(item, qty, price){
   this.item = item;
   this.qty = qty;
   this.price = price;
   this.list = [[item,qty,price]]
   this.add= function(item, qty, price){
     this.list.push([item,qty,price])
};

this.delete = function(item){
    for (var i = 0; i < this.list.length; i++) {
      if (item === this.list[i][0])
        this.list.splice(i,1);
	};
};
this.display = function(item,qty,price){
    console.log("Item, Quantity, Price");
	for (var i = 0; i < this.list.length; i++){
	 console.log(this.list[i][0].toString() + ", " + this.list[i][1] + ", " + this.list[i][2]);
	};
};

}



// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

var mylist = new GroceryList("eggs", 1, 4.99);
mylist;
mylist.add("juice", 2, 10.99);
mylist.add("milk", 1, 2.99);
mylist.delete("milk");
mylist.display();




<pr>

// 5. Reflection 



// What parts of your strategy worked? What problems did you face?

// For this challenge I had paired with Aki. We both had to spend time rsearching on how to implement Nested functions. We knew what we wanted
//to do but didnt have enough experience or knowledge on nested functions.

// What questions did you have while coding? What resources did you find to help you answer them?

// We had a tough time coming up with solution during the session. My pai was able to figure out the solution and I did some re-factoring 


// What concepts are you having trouble with, or did you just figure something out? If so, what?

// Javascript Prototyping. I definitiely need more practise with javascript functions and prototying, iterating over objects 


// Did you learn any new skills or tricks?

// Yes How to created Nested functions 

// How confident are you with each of the Learning Competencies?

// I need a lot of practise

// Which parts of the challenge did you enjoy?

// Working with Aki was great. I should give credit to Aki for coming up with the solution. 

// Which parts of the challenge did you find tedious?

// Not having done a similar exercise before meant spending time understanding concepts. But overall it was a good experience since I learnt something New!

</pr>