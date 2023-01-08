var str = "naveen";
var bag = "";
for (let i = (str.length-1) ; i >=0; i--) {
    bag += str[i];
}
if (bag==str) {
    console.log(str,"is palindrome");
}
else{
    console.log(str,"is not a palindrome");
}s