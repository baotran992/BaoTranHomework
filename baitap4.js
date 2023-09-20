//bai1 * tạo biến T & F coTheMuaRuou *
let tuoi = 15;
let coTheMuaRuou = tuoi >= 18; 

//bai2 
let a = ""; //falsy
let b = 0; //falsy
let c = []; //truthy
let d = 1 > 2; //falsy
let e = {}; //truthy
let f = '0'; //truthy

//bai3 * tạo biến b1 chuyển đổi chuỗi chữ số biến a1 sang kiểu số *
let a1 = "123000";
let b1 = parseInt("2");
console.log(b1); //2

//bai4 * tạo biến b2 chuyển đổi số biến a2 sang chuỗi *
let a2 = 1098;
console.log(typeof a2); //number
let b2 = a2.toString(16); //44a
console.log(typeof b2); //string
console.log(b2); //44a

//bai5 *
let x = typeof (10 >= -1 && typeof NaN === "number" && "Ky" && false && true) === false
//x = False * vì typeof === False === Boolean*

//bai6
var a3 = '1';
var b3 = 2;

var c3 = typeof a3; //string
var d3 = typeof b3; //number
var e3 = typeof d3; //string *vì typeof number là trở về strings*

console.log(c, d, e);

//bai7
const x = 1 / 0;
console.log(x === x + 1); //true *vì 1/0 = infinity; mà infinity + 1 ===infinity*




