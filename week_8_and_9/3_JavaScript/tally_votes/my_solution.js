// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge by myself

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode

// Loop through all the elements of the votes object
// for var names in votes
// assign var votes to value of name property
//  Loop through votes 
// Calculate the number of votes for each person for respective positions


    // Loop through the elements of the voteCount object
    // assign variable num to the values of voteCount property
    //Loop through num and set officers[office] to person with most counts
   

// __________________________________________
// Initial Solution

// for (var names in votes){
//           var vote = votes[names];
//           for (var tally in vote){
     
//       if (tally === "president"){
//       president = vote[tally];
      
//       if(voteCount.president[president] > 0)
//       {
//          voteCount.president[president] +=1;
//       }
//       else{
//       voteCount.president[president] =1;
// }
//       }
//           else if(tally === "vicePresident"){
//       vicepresident = vote[tally];
//       if( voteCount.vicePresident[vicepresident] > 0)
//       {
//          voteCount.vicePresident[vicepresident] += 1; 
//       }
//       else{
//       voteCount.vicePresident[vicepresident] = 1;
// }
//       }
//        else if(tally === "secretary"){
//       secretary = vote[tally];
//       if(voteCount.secretary[secretary] > 0){
//         voteCount.secretary[secretary] += 1;  
//       }
//       else{
//       voteCount.secretary[secretary] = 1;
// }
//       }
//           else if(tally === "treasurer"){
//       treasurer = vote[tally];
//       if(voteCount.treasurer[treasurer] > 0){
//              voteCount.treasurer[treasurer] += 1;

//       }
//       else{
//       voteCount.treasurer[treasurer] = 1;

//       }
//           }    
          
//       }
 
         
  
//       }
      



      
//       for (var officer in voteCount)
//       {
//           num = voteCount[officer];
//           var max = 1;
//           for(var a in num)
//           {
//              if (num[a] >=max)
//              {
//                  max = num[a];
                 
//                  officers[officer] = a;
//              }
            
    
//           }
//       }
      
      







// __________________________________________
// Refactored Solution

for (var names in votes){
  var vote = votes[names];
    for (var tally in vote){
      if(voteCount[tally][vote[tally]] > 0)
        {
           voteCount[tally][vote[tally]] +=1;
        }
      else{
           voteCount[tally][vote[tally]] = 1;
          }
          
    
    }
          
}

for (var officer in voteCount)
      {
          num = voteCount[officer];
          var max = 1;
          for(var a in num)
          {
             if (num[a] >=max)
             {
                 max = num[a];
                 
                 officers[officer] = a;
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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)


// __________________________________________
// Reflection

//What parts of your strategy worked? What problems did you face?

// Since I havent done similar exerices before it took me sometime to get it right. I had to try few different things before I could get it right.
//I used repl.it to test my code

// What questions did you have while coding? What resources did you find to help you answer them?

// I had to research on how to iterate over an objects property. I used the resources mentioned in the readme file


// What concepts are you having trouble with, or did you just figure something out? If so, what?

// Looping over objects property. Although I was able to figure it out, it seems a little more complicated than looping over arrays or hashes

// Did you learn any new skills or tricks?

// How to loop over javascript object property and accessing nested properties

// How confident are you with each of the Learning Competencies?

// Pretty confident. Though I need lot more practice

// Which parts of the challenge did you enjoy?

// Initially I was totally lost on this , but when I figured it out it was amazing.

// Which parts of the challenge did you find tedious?

// None.