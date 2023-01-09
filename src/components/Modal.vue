<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="close ms-3 pt-1" data-bs-dismiss="modal"></div>
        <div class="d-flex flex-column align-items-center justify-content-center mt-4">
          <div class="circle">
            <div class="tick-mark"></div>
          </div>
          <p class="modal-text medium-font my-3">
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
  setup() {},
});
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(255,255,255,0.6) !important; 

  &-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-content {
    width: 369px;
    height: 270px;
  }

  &-text {
    text-align: center !important;
    direction: rtl;
    font-size: 18px;
  }
}

.close {
  &:after {
    aspect-ratio: 1/1;
    display: inline-block;
    content: "\00d7";
    color: #999999;
    font-weight: bolder;
    font-size: 20px;
  }
}

.circle {
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid var(--green-color);
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