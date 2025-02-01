<script setup>
import { onMounted } from "vue";

onMounted(() => {
  /*-----------------------------------------------*/
  // querySelectorAll 回傳一個類陣列
  var lis = document.querySelectorAll("li");
  console.log(lis);

  // 取得 id 相同的 dom
  var li_first = document.getElementById("first_li");
  console.log(li_first);

  // 取得所有 class 相同的 dom
  var secondary = document.getElementsByClassName("secondary_li");
  console.log(secondary);
  //將 secondary 變數的內容輸出到瀏覽器的控制台（Console），檢查該變數的值。
  //取得所有 class 為 secondary_li 的 HTML 元素

  var demo_name = ["jiang", "lee", "xiu"];
  //建立陣列
  console.log(demo_name[1]);
  console.log(demo_name[0]);
  //取得陣列 demo_name 中，索引為 1 的值。

  var c = null;
  console.log(c);
  //將數值明確設定為null

  console.log(1 > 0); //true
  console.log(1 > 2); //false
  console.log(1 >= 2); //false

  var jiang = "江"; //將變數賦予數值江

  if (jiang === "女") {
    console.log("是"); //如果jiang===女 輸出”是“
  } else {
    console.log(jiang); //否則輸出jiang的數值
  }

  var num = 1;

  if (num == "3") {
    console.log("等於 3");
  } else if (num === "2") {
    console.log("等於 2");
  } else if (num === "5") {
    console.log("等於 5");
  } else {
    console.log("其他");
  }

  //物件 object
  var family = {
    father: "爸爸",
    mother: "媽媽",
    brother: "哥哥",
    sister: "我",
  };

  console.log("object物件", "family", "name", family);
  //取得family變數的數值（可能是物件、字串、陣列等）
  //字串的作用是作為標籤（Label）或說明（Description）讓輸出結果更容易理解。
  console.log("我是誰", family["sister"]);
  console.log("我像誰", family.mother);
  //取得物件value方法
  //輸出 "我是誰" 字串，並且取得 family 物件（Object）內 "sister" 屬性的值。
  //其中family 是一個物件（Object）。"sister" 是這個物件的（key），代表要取得 family 內 "sister" 對應的值。

  var aboutMe = {
    gender: "f",
    age: 28,
    hobbies: ["read", "sing", "dance"],
  };

  //物件包覆陣列方式
  console.log(aboutMe.hobbies[2]);
  //取得物件中的陣列數值
  //其中輸出 aboutMe 物件中 hobbies 陣列的索引 2（第三個）元素。

  /*---------------------- let -------------------------*/

  //建立obj物件並新增屬性

  let obj = {}; //建立一個空物件 obj
  obj.a = 1; //方法1：這是使用點記法增加屬性
  obj["b"] = 2; //方法2:新增屬性 'b'，並賦值為 ,這是使用中括號方法

  console.log("obj", obj); //輸出 obj 物件的內容

  const x = {
    //宣告一個不能修改的物件 x，初始值為 { a: 1, b: 2 }
    a: 1,
    b: 2,
  };

  x.a = 3; //修改了 x 物件內部的 a 屬性，將其值從 1 變成 3
  console.log("obj", x);
  //const 只保證變數 x 本身不能被重新賦值（例如 x = {} 會報錯）
  //但 x 內部的屬性仍然可以被修改，例如 x.a = 3; 是可以成立

  /*---------------------- DOM -------------------------*/
  const li_first_content = li_first.textContent; //li_first.textContent 會取得 li_first 這個 HTML 元素的文字內容
  console.log("li_first_content", li_first_content); //顯示 li_first_content 變數的值，讓我們檢查 li_first 原本的文字內容
  li_first.textContent = "aaaaa"; //將 li_first 的內容更改為 "aaaaa"
  //textContent 用來讀取或修改 HTML中的元素與純文字內容

  // querySelector 只取得第一個
  console.log("querySelector", document.querySelector("li.yyy"));
  //選取所有 <li>，且 id="first_li" 的元素
  //列出 NodeList（找到的 <li> 元素集合）

  // 只要符合條件 dom 都回傳
  console.log("querySelectorAll", document.querySelectorAll("li#first_li"));

  // 取得所有 className 相同
  console.log("getElementsByClassName", document.getElementsByClassName("xxx"));

  // 取得相同的 tag
  console.log("getElementsByTagName", document.getElementsByTagName("ul"));

  const ulOne = document.getElementById("ul_1");
  // 取得第一個 li
  console.log(ulOne.firstChild);
  // 取得最後一個 li
  console.log(ulOne.lastChild);

  const li_3 = document.getElementById("li_x3");
  // 找上一層
  console.log(li_3.parentNode);
  console.log(li_3.previousSibling);
  console.log(li_3.nextSibling);

  // nodeValue
  console.log(ulOne.nodeValue); // null
  console.log(document.querySelector("#li_x3 span").firstChild.nodeValue);
  console.log(document.querySelector("#li_x3 span").childNodes[0].nodeValue);

  // attribute
  const firstLi = document.getElementById("first_li");
  console.log(firstLi.attributes);
  console.log(firstLi.getAttribute("id"));
  console.log(firstLi.getAttribute("class"));
  firstLi.setAttribute("class", "first_li_class");
  console.log("class", firstLi.className);
  console.log("id", firstLi.id);

  firstLi.removeAttribute("class");

  console.log(document.querySelector(".x2").hasAttribute("id")); // false

  // 新增節點
  const div = document.getElementById("added");
  const span = document.createElement("span");
  span.setAttribute("id", "new_span");
  div.appendChild(span);

  document.getElementById("new_span").innerHTML = "<p>xxx</p>"; // 有資安問題

  div.removeChild(document.getElementById("new_span"));
});

/*---------------------- 變數 -------------------------*/
/*
    1. var 不要用了
    2. let 可以再更改變數內容
    3. const 不可再更改
  */

let name;
name = "芳宜";
console.log(name);

// const domColor = "red";
// domColor = "blue";

// 字串 組合變數
console.log(`你好 我是 ${name}`);

/*---------------------- function 函式(數) -------------------------*/
/*
    1. function expression
    2. function statement

    3. arrow function
  */

// 1. function expression
// sayGoodMorning(); 無法取得
const sayGoodMorning = function () {
  console.log("早安");
};

sayGoodMorning(); // 執行

// 2. function statement, 存於記憶體同時也把內容存進去
sayGoodNight();
function sayGoodNight() {
  // window.alert("晚安");
  console.log("晚安");
}

// 3. arrow function
const sayGoodAfternoon = () => {
  console.log("午安");
};

sayGoodAfternoon();

// 回傳
// function 預設回傳 undefined
function getMyName() {
  // let name = "江芳宜";
  // console.log(name);
}

const myName = getMyName();
console.log(myName); // undefined

// return
function returnMyName() {
  console.log("befroe return");
  return "我是 江芳宜";
  // console.log("after return"); return 執行完成 不再執行這行
}

const whoAmI = returnMyName();
console.log(whoAmI);

// vue 可以再 html 內使用
function listContent() {
  return "d";
}

// 參數
function introduceYourself(name, age) {
  // console.log(`你好  我是 ${name}, 今年 ${age} 歲`);
  return `你好  我是 ${name}, 今年 ${age} 歲`;
}

// 判斷式
function howMuchShouldIpay(money) {
  if (money < 0) {
    return;
  }

  if (money > 100) {
    return money * 0.9;
  } else if (money > 500) {
    return money * 0.8;
  } else {
    return money;
  }
}

const getMoney = howMuchShouldIpay(-200);
console.log(getMoney);

const iPaid = howMuchShouldIpay(600);
console.log("i paid", iPaid);

/*---------------------- 迴圈 -------------------------*/
// for
for (let index = 0; index < 6; index++) {
  // let a = a + 1 就是 a++
  console.log(`for 迴圈 ${index}`);
}

// for..in 用在物件
const classRoom = {
  name: "三年四班",
  teacher: "GTO",
};

let newClassroom = {};

for (const key in classRoom) {
  console.log("key", key);
  console.log(classRoom[key]);

  newClassroom[key] = classRoom[key];
  // classRoom['name'] =  "三年四班"
  // newClassroom['name'] =  "三年四班"
  // newClassroom['name'] = classRoom['name']
}

console.log("newClassroom", newClassroom);

// for..of 用在陣列
const arr = [1, 2, 3];

let newArr = [];

for (const item of arr) {
  console.log("item", item);
  newArr.push(item * 2);
}

console.log("newArr", newArr);

let anotherArr = [];
for (let index = 0; index < arr.length; index++) {
  const value = arr[index] * 2;
  anotherArr.push(value);
}

console.log("another arr", anotherArr);

// 陣列迴圈
const numArr = [11, 1, 24, 5, 65, 498, 3];
let newNumArr = [];

numArr.forEach((item, index) => {
  console.log(item, index);
  if (item > 50) {
    newNumArr.push(item);
  }
});

console.log("newNumArr", newNumArr);

const filterdArr = numArr.map((item) => {
  if (item < 50) {
    return item;
  }
});

// const filterdArr = numArr.map((_, i) => {
//   console.log(i);
// });

console.log("filterdArr", filterdArr);

// https://www.w3schools.com/js/js_array_const.asp
</script>

<template>
  <div id="jiang">
    <ul id="ul_1">
      <li class="xxx x1 isActived">x1</li>
      <li class="xxx x2">x2</li>
      <li class="xxx x3" id="li_x3">
        <span>x3</span>
      </li>
      <li class="xxx x4">x4</li>
      <li class="yyy y1">y1</li>
      <li class="yyy y2">y2</li>
      <li class="yyy y3">y3</li>
      <li class="yyy y4">y4</li>
    </ul>

    <ul id="ul_2">
      <li id="first_li">a</li>
      <li class="secondary_li">b</li>
      <li class="demo_name">c</li>
      <li>{{ listContent() }}</li>
    </ul>

    <span>{{ introduceYourself("江芳宜", 20) }}</span>
    <span>你好 我是 江芳宜, 今年 20 歲</span>

    <div id="added"></div>
  </div>
</template>

<style scoped>
li.isActived {
  color: deeppink;
}
</style>
