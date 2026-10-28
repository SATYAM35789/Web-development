// Patteren  Matching (Learning)  use regexr.com for more and cheatsheet
//1st way declaring RegEx 
let pattern = 'pw'
let regExOne = new RegExp(pattern)

let flag = 'gi'  // g= global:search it overall in the given , i= caseinSensitive
let regExTwo = new RegExp(pattern,flag)

//2nd way declaring RegEx 
let regExThree = /pw/gi

const strToCheck  = " Pw is growing at  a rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

// 2nd method to check the pattern
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

// 3rd
const oneMoreResult = strToCheck.replace(regExThree,'p-w')   // match and reverse
console.log(oneMoreResult);

// Use Case of replace and match
const webUrl = "https:/pwskills.com/hitesh%20choudhary"
const useableUrl = webUrl.replace(/%\d0/,'-')    // \d used to recoginize the number
console.log(useableUrl);


