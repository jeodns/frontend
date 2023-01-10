<template>
  <div>
    <a class="bold-font mx-2" :href="href" target="_blank" :style="getTitleStyle">{{ title }}</a>
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
    href: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: "white",
    }
  },
  computed: {
    getTitleStyle() {
      return {
        color: this.color
      }
    }
  }
});
</script>

<style lang="scss" scoped>
div, span {
  opacity: 1;
  z-index: 3;
  font-size: 14px;
}

a {
  text-decoration: none;
  cursor: pointer;
}
</style>