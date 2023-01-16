<template>
  <a class="d-flex flex-row" href="https://jeodns.com/" target="_blank">
    <img src="@/assets/icons/jeo.svg"/>
    <p class="my-auto mx-2">JeoDNS</p>
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
  font-family: "Poppins", "IRANSans";
  font-size: 18px;
  font-weight: bold;
  color: white;
  z-index: 3;
  opacity: 1;
}
</style>