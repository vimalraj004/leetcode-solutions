/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0 , right = letters.length -1 , smallestLetter =letters[0];
    while (left <= right){
        console.log(left,"left");
        console.log(right,"right");
        let mid = Math.floor((left+right)/2);
        console.log(mid,"mid");
        console.log(letters[mid],"letter[mid]");
        console.log("---------------------------")
        let charcodeformid = letters[mid].charCodeAt(0) ;
        let cahrcodefortarget = target.charCodeAt(0);
        if(charcodeformid===cahrcodefortarget ){
            if(letters[mid] >target){
            return smallestLetter;
            }else{
                left = mid + 1;
            }
        }else
         if(charcodeformid<cahrcodefortarget){
            left = mid +1
        }else{
            smallestLetter = letters[mid];
            right = mid-1;
        }
    }
    return smallestLetter;
};