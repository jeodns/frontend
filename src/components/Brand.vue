<template>
  <a class="d-flex flex-row" href="https://jeodns.com/">
    <p class="my-auto mx-2">JeoDNS</p>
    <img src="@/assets/icons/jeo.svg"/>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

p {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: bold;
  color: white;
  z-index: 3;
  opacity: 1;
}
</style>