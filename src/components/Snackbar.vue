<template>
  <div class="toast" :class="(modelValue) ? 'show' : ''">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    timeout: {
      type: Number,
      default: 3000,
    },
    message: {
      type: String,
      default: 'This is a test message'
    }
  },
  emits: ['update:modelValue'],
  setup() {},
  watch: {
    modelValue(value) {
      if (value) {
        setTimeout(() => {
          this.$emit('update:modelValue', !value)
        }, this.timeout)
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.toast {
  visibility: hidden;
  width: auto;
  background-color: red;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 10px 2rem;
  z-index: 1;
  font-size: 16px;
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%);

  &.show {
    visibility: visible;
    -webkit-animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
  }
}

@-webkit-keyframes fadeIn {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadeIn {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeOut {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeOut {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>