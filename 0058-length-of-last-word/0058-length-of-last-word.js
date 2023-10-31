/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strArr = s.split(' ')
    console.log(strArr)
    const wordsArr = []
    strArr.forEach((str) => {
        if (str){
            wordsArr.push(str)
        }
    })
    console.log('words array', wordsArr)
    return wordsArr[wordsArr.length - 1].length 
};