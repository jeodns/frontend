<template>
  <div
    v-if="modelValue"
    class="modal fade show"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-modal="true"
    role="dialog" 
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="close ms-4 pt-1" @click="onClose"></div>
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <div class="circle">
            <div class="tick-mark"></div>
          </div>
          <p class="modal-text iransans my-4">
            از ارسال پیام شما متشکریم! <br/>
  در اسرع وقت با شما تماس خواهیم گرفت.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:modelValue'],
  setup() {},
  methods: {
    onClose() {
      this.$emit('update:modelValue', false)
    }
  }
});
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(255,255,255,0.6) !important; 
  display: block;

  &-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-content {
    width: 369px;
    height: 270px;
    -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.25); 
    box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.25);
    border: none;
  }

  &-text {
    text-align: center !important;
    direction: rtl;
    font-size: 16px;
    color: var(--title-color);
    font-weight: 700;
  }
}

.close {
  cursor: pointer;
  &:after {
    aspect-ratio: 1/1;
    display: inline-block;
    content: "\00d7";
    color: #999999;
    font-weight: bolder;
    font-size: 30px;
  }
}

.circle {
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid var(--green-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


$tick-width: 5px;
$tick-size: 30px;

.tick-mark {
    position: relative;
    display: inline-block;
    width: $tick-size;
    height: $tick-size;
}

.tick-mark::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: $tick-width;
    background-color: var(--green-color);
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}

.tick-mark::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: $tick-width;
    width: 100%;
    background-color: var(--green-color);
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
}
</style>