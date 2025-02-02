<script>
import { onMounted, ref } from "vue";
</script>

<script setup>
onMounted(() => {
  const btn = document.getElementById("btn");
  const inner = document.getElementById("inner");
  const outter = document.getElementById("outter");

  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    event.stopPropagation();
    window.alert("btn 按了");
    true;
  });

  inner.addEventListener("click", function (e) {
    e.stopPropagation();
    window.alert("inner 按了");
  });

  outter.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      event.stopPropagation(); // 不要往上觸發
      window.alert("outter 按了");
    }
    // false, 不要往下觸發; 要跟 event.stopPropagation() 一起寫
  );
});

function clicked() {
  console.log("clicked");
}

const onchanged = () => {
  if (inputContent.value === "") window.alert("不能是空的");
};

const inputContent = ref("");
</script>

<template>
  <div id="event">
    <div id="outter">
      <div id="inner">
        <div id="btn">btn</div>
      </div>
    </div>

    <div @click="clicked">
      <span>xxx</span>
    </div>

    <input type="text" v-model="inputContent" @blur="onchanged" />
    <!-- <div class="child self"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div> -->
  </div>
</template>

<style>
body {
  margin: 0;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

#event {
  width: 100vw;
  height: 100vh;
  background-color: #303030;

  /* display: flex;
  flex-flow: column wrap;
  align-items: flex-start; */
  /* align-content: center; */
  /* justify-content: flex-start;
  gap: 10px; */

  display: flex;
  align-items: center;
  justify-content: center;

  .child {
    height: 600px;
    width: 200px;
    background-color: deeppink;
  }

  .self {
    align-self: flex-end;
  }

  #outter {
    width: 50vw;
    height: 50vh;
    background-color: black;
  }

  #inner {
    width: 25vw;
    height: 25vh;
    background-color: burlywood;
  }

  #btn {
    width: 120px;
    height: 60px;
    background-color: deeppink;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: all ease 400ms;

    &:hover {
      background-color: pink;
    }
  }
}
</style>
