/* Back-end --------------*/
var palindrome = function(input){
  for(i = 0; i <= input.length; i += 1){
    if(input.charAt(i) === (input.split("").reverse().join("").charAt(i))){
      return true;
    } else {
      return false;
    }
}
};
/* Front-end --------------*/
$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
    var input = $("input#word").val();
    var result = palindrome(input);
    $("#result").text(result);
  });
});





// var palindrome = function(input){
//   if (input === input.split('').reverse().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// };
