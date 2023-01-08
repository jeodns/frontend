<template>
  <div>
    <div class="home-main">
      <div class="home-main__header d-flex flex-row justify-space-between pt-4 px-5">
        <div class="home-main__header-menu d-flex flex-row justify-space-around">
          <p>
            <span>پشتیبانی</span>
            <img class="mx-1" src="@/assets/icons/headset_mic.svg" alt="">
          </p>
          <p>JeoIP <span><img class="mx-1" src="@/assets/icons/left-chevron.png" alt=""></span></p>
          <p>وب شات <span><img class="mx-1" src="@/assets/icons/left-chevron.png" alt=""></span></p>
          <p>جی سرور <span><img class="mx-1" src="@/assets/icons/left-chevron.png" alt=""></span></p>
          <p>هلدینگ داده نگار جی <span><img class="mx-1" src="@/assets/icons/left-chevron.png" alt=""></span></p>
        </div>
        <div class="home-main__header-brand"></div>
      </div>
      <div class="home-main__background"></div>
    </div>
    <div class="home-footer">

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
.home {
  &-main {
    height: 80vh;
    position: relative;
    z-index: 2;

    &__background {
      height: 100%;
      width: 100%;
      background: radial-gradient(circle at 0% 100%, rgba(0,15,87,1) 0%, rgba(45,80,182,1) 25%, rgba(8,26,111,1) 50%, rgba(8,26,111,1) 90%, rgba(0,15,87,1) 100%);
      opacity: 0.89;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    &__header {
      &-menu {
        gap: 2.5rem;
      }
    }

    & p {
      opacity: 1;
      z-index: 3;
      color: white;
    }
  }

  &-footer {
    height: 100%;
  }
}
</style>
