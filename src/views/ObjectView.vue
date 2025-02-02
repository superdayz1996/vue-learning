<script>
import { onMounted, ref } from "vue";
</script>

<script setup>
onMounted(() => {});

/*----------- 物件 -----------*/
// const obj = {
//   name: '',
//   family: [],
//   hobbies: []
// }

// MeAndMyFamiily 就是 constructor 建構子
function MeAndMyFamiily(n, f, h) {
  console.log("MeAndMyFamiily", this);

  this.name = n;
  this.family = f;
  this.hobbies = h;
  this.age = 20;
  this.sayHi = function () {
    console.log("statement", this);
    console.log("hi");
  };

  // this.sayHi = () => {
  //   console.log("statement", this);
  //   console.log("hi");
  // };

  this.myAge = function (age) {
    this.age = age;
    console.log(this);

    const that = this;

    return function () {
      console.log("return fn", that);
      console.log("fn 裡面的 this", this); // 這是 bug 找不到 this
      // console.log(`我是 ${this.name}, 今年 ${this.age} 歲`);
      console.log(123);
    };
  };
}

MeAndMyFamiily.prototype = {
  goToTainan: function () {
    console.log("全家去台南玩");
  },
  goHome: function () {
    console.log("全家回花蓮啦!!");
  },
};

// MeAndMyFamiily.prototype.goToTainan = function () {
//   console.log("全家去台南玩");
// };

// MeAndMyFamiily.prototype.goHome = function () {
//   console.log("全家回花蓮啦!!");
// };

const name = "將芳宜";
const jaing = new MeAndMyFamiily(name, ["江宜祥", "鄭安惠", "江敏榮"], ["聽歌", "看影片"]);
console.log(jaing);

jaing.sayHi();
jaing.myAge(22)();
jaing.goToTainan();
jaing.goHome();

/*----------- this -----------*/
const total = ref(0);

onMounted(() => {
  const div = document.getElementById("this_div");

  div.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("this", this);
    total.value++;
  });

  window.addEventListener("click", function () {
    console.log("this window", this);
  });
});

function sum(a, b) {
  console.log("sum", this);
  return a + b;
}

sum(4, 5);

/*----------- 原型鍊 -----------*/
const arr = [];
console.log("arr", arr);
</script>

<template>
  <div>
    <span>{{ total }}</span>
    <div id="this_div"></div>
  </div>
</template>

<style scoped>
#this_div {
  height: 30px;
  width: 100px;
  background-color: aqua;
  cursor: pointer;
}
</style>
