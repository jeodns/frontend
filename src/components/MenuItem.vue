<template>
  <div>
    <span class="bold-font mx-2">{{ title }}</span>
    <slot name="icon"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
div, span {
  opacity: 1;
  z-index: 3;
  font-size: 14px;
  color: white;
}
</style>