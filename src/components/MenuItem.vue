<template>
  <div class="d-flex flex-row">
    <a class="bold-font mx-2 my-auto" :href="href" target="_blank" :style="getTitleStyle">{{ title }}</a>
    <span class="my-auto mdi mdi-18px" :class="icon" :style="getIconStyle"></span>
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
    },
    icon: {
      type: String,
      default: 'mdi-chevron-left'
    },
    iconColor: {
      type: String,
      default: "white",
    }
  },
  computed: {
    getTitleStyle() {
      return {
        color: this.color
      }
    },
    getIconStyle() {
      return {
        color: this.iconColor
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