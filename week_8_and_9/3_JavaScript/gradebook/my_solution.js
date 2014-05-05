/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge by myself.

*/





// __________________________________________
// Write your code below.

// var students = ["Joseph", "Susan", "William", "Elizabeth"]

// var scores = [ [80, 70, 70, 100],
//                [85, 80, 90, 90],
//                [75, 70, 80, 75],
//                [100, 90, 95, 85] ]






// // __________________________________________
// // Write your code below.

// var average = function(array){
    
//    var  sum = 0
//     for (i=0;i<array.length;i++)
//     {
        
//         sum += array[i]
        
//     }
    
//     avg = sum/array.length
//     return avg
// }

// var gradebook = {}
// gradebook.Joseph = {}
// gradebook.Susan = {}
// gradebook.Susan.name = "Susan"
// gradebook.William = {}
// gradebook.Elizabeth = {}
// gradebook.William.testScores = scores[2]
// gradebook.Joseph.testScores = scores[0]
// gradebook.Susan.testScores = scores[1]
// gradebook.Elizabeth.testScores = scores[3]
// gradebook.addScore = function(name,score)
// {
 
 
// for(i=0;i<students.length;i++)
// {
//     if (name===students[i])
//     {
        
//     scores[i].push(score)
//     }
    
    
// }

    
// }

// gradebook.getAverage = function(name)
// {
//  //a = Object.getOwnPropertyNames(gradebook)
 
// for(i=0;i<students.length;i++)
// {
//     if (name===students[i])
//     {
        
//     return average(scores[i])
//     }
    
    
// }

    
// }






// __________________________________________
// Refactored Solution

// Couldnt really think of anyway to refactor this code.

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]






// __________________________________________
// Write your code below.

var average = function(array){
    
   var  sum = 0
    for (i=0;i<array.length;i++)
    {
        
        sum += array[i]
        
    }
    
    avg = sum/array.length
    return avg
}

var gradebook = {}
gradebook.Joseph = {}
gradebook.Susan = {}
gradebook.Susan.name = "Susan"
gradebook.William = {}
gradebook.Elizabeth = {}
gradebook.William.testScores = scores[2]
gradebook.Joseph.testScores = scores[0]
gradebook.Susan.testScores = scores[1]
gradebook.Elizabeth.testScores = scores[3]
gradebook.addScore = function(name,score)
{
 
 
for(i=0;i<students.length;i++)
{
    if (name===students[i])
    {
        
    scores[i].push(score)
    }
    
    
}

    
}

gradebook.getAverage = function(name)
{
 
 
for(i=0;i<students.length;i++)
{
    if (name===students[i])
    {
        
    return average(scores[i])
    }
    
    
}

    
}



// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)


//Reflections

// What parts of your strategy worked? What problems did you face?

// I was out of touch with javascript and had to read up old assignments to get myself familiar with the syntax ,creating objects etc.

// What questions did you have while coding? What resources did you find to help you answer them?

// Yes I hadnt done any javascript coding for a while so had to read up before I could start the assignment.

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// None

// Did you learn any new skills or tricks?

// No

// How confident are you with each of the Learning Competencies?

// I need some more javascript practise.

// Which parts of the challenge did you enjoy?

// Getting the driver code to work is always enjoyable

// Which parts of the challenge did you find tedious?

// None.