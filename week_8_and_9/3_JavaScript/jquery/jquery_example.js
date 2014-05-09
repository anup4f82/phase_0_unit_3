$(document).ready(function(){
 
//RELEASE 0: 
  //Link this script and the jQuery library to the jquery_example.html file and analyze what this code does. 
 
$('body').css({'background-color': 'pink'})
 
//RELEASE 1:
  //Add code here to select elements of the DOM 
 

   var header1 = $(":header");
   var bodyElement = $('body');
   var class1 = $('mascot');


  
//RELEASE 2: 
  // Add code here to modify the css and html of DOM elements
 
   $( ":header" ).css({ background: "grey", color: "black",border: "3px solid black",visibility:"visible" });

     $("div :first-child").html("Fence Lizards")

     
//RELEASE 3: Event Listener
  // Add the code for the event listener here 
 

    $('img').on('mouseover', function(e){
     e.preventDefault()
    $(this).attr('src', 'http://www.dpughphoto.com/images/eastern%20fence%20lizard%20male%20occoneechee%20mtn%2032407.JPG')
  })

  $('img').on('mouseout', function(e){
     e.preventDefault()
    $(this).attr('src','dbc_logo.jpg')
  })



 
//RELEASE 4 : Experiment on your own
 
 
 $('img').mouseenter(function () {
    $(this).css({border: '0 solid #f37736'}).animate({
        borderWidth: 4
    }, 500);
}).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});
 
 
 
 
})  // end of the document.ready function: do not remove or write DOM manipulation below this.
