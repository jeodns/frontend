<template>
  <div class="footer__container d-flex flex-row justify-content-end mx-5 mt-3">
    <div class="footer-items__container d-flex flex-row my-auto mx-3">
      <div class="footer__item d-flex flex-column align-items-center justify-items-center">
        <img class="m-auto" src="@/assets/icons/telegram.svg" alt="">
      </div>
      <div class="footer__item d-flex flex-column align-items-center justify-items-center">
        <img class="m-auto" src="@/assets/icons/mail.svg" alt="">
      </div>
      <div class="footer__item d-flex flex-column align-items-center justify-items-center">
        <img class="m-auto" src="@/assets/icons/phone.svg" alt="">
      </div>
    </div>
    <p class="footer__title medium-font my-auto">راه های ارتباطی:</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.footer {
  &__title {
    text-align: right;
    direction: rtl;
    color: #173d7a;
    font-size: 13px;
  }

  &-items {
    &__container {
      gap: 0.5rem;
    }
  }

  &__item {
    width: 45px;
    height: 45px;
    background-color: var(--primary-color);
    border-radius: 50%;
  }
}
</style>