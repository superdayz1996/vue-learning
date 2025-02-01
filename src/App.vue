<script>
import { RouterView, useRouter } from "vue-router";
import { onMounted } from "vue";
</script>

<script setup>
const router = useRouter();
onMounted(() => {
  window.addEventListener("resize", resized);
});

function resized() {
  console.log(1);
}

function toNextPage() {
  window.removeEventListener("resize", resized);
  router.push("/event");
}
</script>

<template>
  <div class="btn" @click="toNextPage">
    <span>next page</span>
  </div>
  <RouterView></RouterView>
</template>
