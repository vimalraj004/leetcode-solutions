/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let number =0;
    let numberStack = [];
    let stringStack =[];
    let currentString = "";
    for (let i=0;i<=s.length-1;i++){
        let char = s[i]
        if(char >="0" && char<="9"){
            number = number * 10 + Number(char);
        }else if( char ==="["){
            numberStack.push(number);
            stringStack.push(currentString);
            number =0;
            currentString ="";
        }else if(char ==="]"){
            let multipleNumber = numberStack.pop();
            let previousString = stringStack.pop();
            currentString = previousString + currentString.repeat(multipleNumber)
        }else{
            currentString+=char;
        }
    }
    return currentString;
};
 