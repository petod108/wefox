function palindrome(sentence) {
  var regExpOnlyCharacters = /[\W_]/g;
  var lowerCaseOnlyCharacters = sentence.toLowerCase().replace(regExpOnlyCharacters, '');
  var reverseStr = lowerCaseOnlyCharacters.split('').reverse().join(''); 
  return reverseStr === lowerCaseOnlyCharacters;
}
var sentense = [];
sentense.push("A man, a plan, a canal. Panama");
sentense.push("Peter et.e.p");
sentense.push("Peter");

sentense.forEach(function(one) {
  console.log('Sentense: "' + one + '" is palindrome: ' + palindrome(one));
});
