<script>
import { onMounted } from "vue";
</script>

<script setup>
onMounted(() => {});
</script>

<template>
  <div id="f">
    <div id="r-f">
      <div class="child c1">1</div>
      <div class="child c2">2</div>
      <div class="child c3">3</div>
      <div class="child c4">4</div>
      <div class="child c5">5</div>
      <div class="child c6">6</div>
      <div class="child c7">7</div>
    </div>

    <div id="bottom"></div>
  </div>
</template>

<style scoped>
#f {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-flow: column nowrap;

  /* height: 100vh; */
  /* background-color: #000; */
}

#r-f {
  height: 400px;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  /* align-content: space-between; 多個 row, 只看 align-content, 不看 align-items */
  justify-content: center;
  gap: 20px;
  background-color: blanchedalmond;

  .child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* height: 50px; */
    /* width: 100px; */
    /* flex-grow: 0; */
    /* min-width: 400px; */
    padding: 20px;
    background-color: black;

    &.c2 {
      height: 20px;
      align-self: center;
    }

    &.c3 {
      height: 30px;
    }

    &.c4 {
      height: 40px;
    }

    &.c5 {
      height: 50px;
    }

    &.c6 {
      height: 60px;
    }

    &.c7 {
      height: 70px;
    }
  }

  /* .c1 {
    height: 50px;
  } */

  /* .c2 {
    height: 50px;
  }

  .c3 {
    height: 50px;
  }

  .c4 {
    height: 50px;
  }

  .c5 {
    height: 50px;
  }

  .c6 {
    height: 50px;
  }

  .c7 {
    height: 50px;
  } */
}

#bottom {
  flex: 1;
  background-color: aquamarine;
}
</style>
