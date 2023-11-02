/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPref = ''
    const firstStr = strs[0]
    for (let i = 0; i < firstStr.length; i++) {
      const char = firstStr[i]
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== char) {
          return commonPref
        }
      }
      commonPref += char
    }
    return commonPref
};