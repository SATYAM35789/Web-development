const { log } = require("console");
const path = require("path");

// console.log(path.sep);  //   \(window)   /(linux , mac)

// console.log(process.env.PATH);   //;(window)

// console.log(path.delimiter  );

const filepath1 = '/public_html/home/index.html';


const currentFilePath = __filename; // Gives current file path
console.log(currentFilePath);

// console.log(__dirname);   // gives directory name

let basename = path.basename(currentFilePath);  // file path ka base name dega
console.log('basename',basename);

let basenameWithoutExt = path.basename(currentFilePath , '.js')   // extension ke alwa filename return kerega
console.log('basenameWithoutExt',basenameWithoutExt);

let dirname = path.dirname(currentFilePath);
console.log('dirname',dirname);

console.log('ext1', path.extname(currentFilePath));
console.log('ext2', path.extname('index.md.js'));  

// Combine  : dir + base
let pathToFile = path.format({
    dir : '/public_html/home' ,
    base : 'index.html'
})

console.log('pathToFile :',pathToFile);

// Absolute path :- jo root se start hoti hai C: , D:

// Checking absolute path
console.log('IsAbsolute', path.isAbsolute( currentFilePath));
console.log('IsAbsolute', path.isAbsolute( '/index.js'));
console.log('IsAbsolute', path.isAbsolute( './index.js'));
console.log('IsAbsolute', path.isAbsolute( '../index.js'));

// Multple path where file exist , want a single path by doing combin
let pathToDir  = path.join( '/home','js','dist','satyam', 'index.js')
console.log(pathToDir);

//Reverse of above
console.log('parse >', path.parse(currentFilePath) );


// relative path : ek path se dusre path par kaise jaye
console.log('relative path' , path.relative('/home/user/config','/home/user/js/'));

console.log('resolve>', path.resolve());  // ye bhi dir wala kaam karta hai

console.log('normalize', path.normalize('//home//user//js'));

