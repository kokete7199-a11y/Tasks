function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));


function multiply(a, b) {
  return a * b; 
}
console.log(multiply(4, 6));

 
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(10));

function isOdd(n) {
  return n % 2 !== 0;
}
console.log(isOdd(7));


function yearsToDays(years) {
  return years * 365;
}
console.log(yearsToDays(2));


function checkAge(age) {
  return age >= 18 ? "Adult" : "Minor";
}
console.log(checkAge(20));


function getAbs(n) {
  return Math.abs(n);
}
console.log(getAbs(-15));


function hoursToSeconds(hours) {
  return hours * 3600;
}
console.log(hoursToSeconds(2));


function triangleArea(base, height) {
  return (base * height) / 2;
}
console.log(triangleArea(10, 5));


function remainder(a, b) {
  return a % b;
}
console.log(remainder(10, 3));


function isDivisibleByTen(n) {
  return n % 10 === 0;
}
console.log(isDivisibleByTen(50));


function cube(n) {
  return n ** 3;
}
console.log(cube(4));


function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Ali"));


function isEmpty(str) {
  return str.length === 0;
}
console.log(isEmpty(""));


function strLength(str) {
  return str.length;
}
console.log(strLength("Hello"));


function compareStrings(str1, str2) {
  return str1 === str2;
}
console.log(compareStrings("test", "test"));


function getMin(a, b) {
  return Math.min(a, b);
}
console.log(getMin(5, 9));


function getMax(a, b) {
  return Math.max(a, b);
}
console.log(getMax(5, 9));


function kmToMeters(km) {
  return km * 1000;
}
console.log(kmToMeters(3));


function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(25));


function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1,2,3]));


function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([1,2,3]));


function sumArray(arr) {
  return arr.reduce((a,b)=>a+b,0);
}
console.log(sumArray([1,2,3,4]));


function averageArray(arr) {
  return sumArray(arr) / arr.length;
}
console.log(averageArray([10,20,30]));


function findElement(arr, elem) {
  return arr.includes(elem);
}
console.log(findElement([1,2,3],2));


function filterEvens(arr) {
  return arr.filter(n=>n%2===0);
}
console.log(filterEvens([1,2,3,4]));


function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray([1,2,3]));


function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("abc"));


function toUpper(str) {
  return str.toUpperCase();
}
console.log(toUpper("hello"));
 

function trimString(str) {
  return str.trim();
}
console.log(trimString("  hi  "));


function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1,2],[3,4]));


function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3,7,2]));


function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([3,7,2]));


function countChar(str, char) {
  return str.split(char).length - 1;
}
console.log(countChar("hello","l"));


function splitToWords(str) {
  return str.split(" ");
}
console.log(splitToWords("hello world"));


function hasNegative(arr) {
  return arr.some(n=>n<0);
}
console.log(hasNegative([1,-2,3]));


function wordsLengths(arr) {
  return arr.map(w=>w.length);
}
console.log(wordsLengths(["hi","hello"]));


function numsToStrings(arr) {
  return arr.map(String);
}
console.log(numsToStrings([1,2,3]));


function repeatStr(str, n) {
  return str.repeat(n);
}
console.log(repeatStr("a",3));


function removeLast(arr) {
  return arr.slice(0,-1);
}
console.log(removeLast([1,2,3]));

function factorial(n){
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));


function randomTen(){
  return Math.floor(Math.random() * 10) + 1;
}
console.log(randomTen());


function endsWith(str, char){
  return str.endsWith(char);
}
console.log(endsWith("hello","o"));


function countVowels(str){
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("education"));


function removeDuplicates(arr){
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,1,2,3]));


function sortAsc(arr){
  return [...arr].sort((a,b)=>a-b);
}
console.log(sortAsc([3,1,2]));


function sortDesc(arr){
  return [...arr].sort((a,b)=>b-a);
}
console.log(sortDesc([3,1,2]));


function isPalindrome(str){
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("level"));


function capitalizeWords(str){
  return str.split(" ").map(w=>w[0].toUpperCase()+w.slice(1)).join(" ");
}
console.log(capitalizeWords("hello world"));


function getIntersection(arr1, arr2){
  return arr1.filter(x=>arr2.includes(x));
}
console.log(getIntersection([1,2,3],[2,3,4]));


function decimalToBinary(n){
  return n.toString(2);
}
console.log(decimalToBinary(10));


function wordCount(str){
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("hello world again"));


function replaceWord(str, oldW, newW){
  return str.replaceAll(oldW,newW);
}
console.log(replaceWord("I like JS","JS","JavaScript"));


function isPrime(n){
  if(n<2) return false;
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0) return false;
  }
  return true;
}
console.log(isPrime(7));


function getNames(users){
  return users.map(u=>u.name);
}
console.log(getNames([{name:"Ali"},{name:"Sara"}]));


function calcAge(birthYear){
  return new Date().getFullYear() - birthYear;
}
console.log(calcAge(2000));


function randomHexColor(){
  return "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
}
console.log(randomHexColor());


function isSorted(arr){
  return arr.every((v,i)=>i===0||arr[i-1]<=v);
}
console.log(isSorted([1,2,3]));


function mergeObjects(obj1,obj2){
  return {...obj1,...obj2};
}
console.log(mergeObjects({a:1},{b:2}));


function sumDigits(n){
  return n.toString().split("").reduce((a,b)=>a+Number(b),0);
}
console.log(sumDigits(123));


function flattenArray(arr){
  return arr.flat();
}
console.log(flattenArray([[1,2],[3,4]]));


function delay(ms){
  return new Promise(res=>setTimeout(res,ms));
}
delay(500).then(()=>console.log("done"));


async function fetchData(url){
  const r = await fetch(url);
  return await r.json();
}
fetchData("https://jsonplaceholder.typicode.com/todos/1").then(console.log);


function objectToQueryString(obj){
  return new URLSearchParams(obj).toString();
}
console.log(objectToQueryString({a:1,b:2}));


function deepEqual(obj1,obj2){
  return JSON.stringify(obj1)===JSON.stringify(obj2);
}
console.log(deepEqual({a:1},{a:1}));


function uniqueOnly(arr){
  return arr.filter(x=>arr.indexOf(x)===arr.lastIndexOf(x));
}
console.log(uniqueOnly([1,1,2,3,3]));


function chunkArray(arr,size){
  const res=[];
  for(let i=0;i<arr.length;i+=size){
    res.push(arr.slice(i,i+size));
  }
  return res;
}
console.log(chunkArray([1,2,3,4,5],2));


function daysBetween(d1,d2){
  return Math.abs((new Date(d2)-new Date(d1))/86400000);
}
console.log(daysBetween("2024-01-01","2024-01-10"));


function debounce(func,wait){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t=setTimeout(()=>func(...args),wait);
  };
}
const log=debounce(()=>console.log("debounced"),500);
log();


function camelToSnake(str){
  return str.replace(/[A-Z]/g,m=>"_"+m.toLowerCase());
}
console.log(camelToSnake("helloWorld"));


function mostFrequent(arr){
  const m={};
  arr.forEach(x=>m[x]=(m[x]||0)+1);
  return Object.keys(m).reduce((a,b)=>m[a]>m[b]?a:b);
}
console.log(mostFrequent([1,2,2,3,3,3]));


function maskCard(number){
  const s=number.toString();
  return "*".repeat(s.length-4)+s.slice(-4);
}
console.log(maskCard(1234567812345678));


function isNumeric(str){
  return /^\d+$/.test(str);
}
console.log(isNumeric("12345"));


function swapCase(str){
  return str.split("").map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join("");
}
console.log(swapCase("AbC"));


function simpleInterest(p,r,t){
  return (p*r*t)/100;
}
console.log(simpleInterest(1000,5,2));


function getKeys(obj){
  return Object.keys(obj);
}
console.log(getKeys({a:1,b:2}));


function getValues(obj){
  return Object.values(obj);
}
console.log(getValues({a:1,b:2}));


function arrayToObject(arr){
  return arr.reduce((o,v,i)=>(o[i]=v,o),{});
}
console.log(arrayToObject(["a","b","c"]));


function fibonacci(n){
  const res=[0,1];
  for(let i=2;i<n;i++){
    res.push(res[i-1]+res[i-2]);
  }
  return res.slice(0,n);
}
console.log(fibonacci(6));


function isPerfectSquare(n){
  return Number.isInteger(Math.sqrt(n));
}
console.log(isPerfectSquare(16));


function compact(arr){
  return arr.filter(Boolean);
}
console.log(compact([0,1,false,2,"",3]));


function arrayDiff(arr1,arr2){
  return arr1.filter(x=>!arr2.includes(x));
}
console.log(arrayDiff([1,2,3],[2]));


function timeConvert12to24(t){
  let [time,mod]=t.split(" ");
  let [h,m]=time.split(":");
  if(mod==="PM"&&h!=="12") h=+h+12;
  if(mod==="AM"&&h==="12") h="00";
  return `${h}:${m}`;
}
console.log(timeConvert12to24("02:30 PM"));


function daysUntilYearEnd(){
  const now=new Date();
  const end=new Date(now.getFullYear(),11,31);
  return Math.ceil((end-now)/86400000);
}
console.log(daysUntilYearEnd());


function firstMissingPositive(arr){
  let n=1;
  while(arr.includes(n)) n++;
  return n;
}
console.log(firstMissingPositive([1,2,3,5]));


function wordFrequency(str){
  const m={};
  str.split(/\s+/).forEach(w=>m[w]=(m[w]||0)+1);
  return m;
}
console.log(wordFrequency("hi hi hello"));


function shuffle(arr){
  return [...arr].sort(()=>Math.random()-0.5);
}
console.log(shuffle([1,2,3,4]));


function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("test@mail.com"));


function toCSV(data){
  const k=Object.keys(data[0]);
  return [k.join(","),...data.map(o=>k.map(x=>o[x]).join(","))].join("\n");
}
console.log(toCSV([{a:1,b:2},{a:3,b:4}]));


function formatNumber(n){
  return n.toLocaleString();
}
console.log(formatNumber(1000000));


function uniqueRandoms(count,min,max){
  const s=new Set();
  while(s.size<count){
    s.add(Math.floor(Math.random()*(max-min+1))+min);
  }
  return [...s];
}
console.log(uniqueRandoms(5,1,10));


function isLeapYear(year){
  return year%4===0&&(year%100!==0||year%400===0);
}
console.log(isLeapYear(2024));


function getDayName(date){
  return new Date(date).toLocaleDateString("en-US",{weekday:"long"});
}
console.log(getDayName("2024-01-01"));


function truncate(str,limit){
  return str.length>limit?str.slice(0,limit)+"...":str;
}
console.log(truncate("Hello world",5));


function distance(x1,y1,x2,y2){
  return Math.hypot(x2-x1,y2-y1);
}
console.log(distance(0,0,3,4));


function maxChar(str){
  const m={};
  for(let c of str) m[c]=(m[c]||0)+1;
  return Object.keys(m).reduce((a,b)=>m[a]>m[b]?a:b);
}
console.log(maxChar("javascript"));


function hasSubArray(arr){
  return arr.some(Array.isArray);
}
console.log(hasSubArray([1,[2],3]));


function sumOdds(arr){
  return arr.filter(n=>n%2!==0).reduce((a,b)=>a+b,0);
}
console.log(sumOdds([1,2,3,4,5]));


function toSlug(str){
  return str.toLowerCase().trim().replace(/\s+/g,"-");
}
console.log(toSlug("Hello World Again"));


function generateId(){
  return Math.random().toString(36).substring(2,10);
}
console.log(generateId());
