<template>
  <a class="d-flex flex-row" href="https://jeodns.com/" target="_blank">
    <p class="my-auto mx-2">JeoDNS</p>
    <div
      class="
        polygon
        my-auto
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <span class="regular-font">J</span>
      <span class="regular-font">E</span>
      <span class="regular-font">O</span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
p {
  font-family: "Poppins";
  font-size: 18px;
  font-weight: bold;
  color: white;
  z-index: 3;
  opacity: 1;
}

.polygon {
  width: 32px;
  height: 32px;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: linear-gradient(
    180deg,
    rgba(69, 149, 246, 1) 0%,
    rgba(92, 199, 255, 1) 100%
  );
  z-index: 3;
  opacity: 1;

  & span {
    color: white;
    font-size: 8px;
    margin: -2px;
  }
}
</style>