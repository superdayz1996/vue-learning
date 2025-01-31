<script setup>
import { onMounted } from "vue";
import { generateCodeFrame } from "vue/compiler-sfc";

onMounted(() => {
  var lis = document.querySelectorAll("li");
  console.log(lis);
  var li_first = document.getElementById("first_li");
  console.log(li_first);

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
    //

//物件 object
var family = {
  father : "爸爸",
  mother: "媽媽",
  brother:"哥哥",
  sister:"我",
};

console.log("object物件","family","name",family);
//取得family變數的數值（可能是物件、字串、陣列等）
//字串的作用是作為標籤（Label）或說明（Description）讓輸出結果更容易理解。
console.log("我是誰",family["sister"]);
console.log("我像誰",family.mother);
//取得物件value方法
//輸出 "我是誰" 字串，並且取得 family 物件（Object）內 "sister" 屬性的值。
//其中family 是一個物件（Object）。"sister" 是這個物件的（key），代表要取得 family 內 "sister" 對應的值。

var aboutMe ={
  gender:"f",
  age:28,
  hobbies:["read","sing","dance"]
};

//物件包覆陣列方式
console.log(aboutMe.hobbies[2]);
//取得物件中的陣列數值
//其中輸出 aboutMe 物件中 hobbies 陣列的索引 2（第三個）元素。

})
</script>

<template>
  <div id="jiang">
    <ul>
      <li id="first_li">a</li>
      <li class="secondary_li">b</li>
      <li class="demo_name">c</li>
    </ul>
  </div>
</template>

<style scoped></style>