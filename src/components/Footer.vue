<template>
  <div class="footer__container d-flex flex-row mx-5 mt-3">
    <p class="footer__title my-auto">راه های ارتباطی:</p>
    <div class="footer-items__container d-flex flex-row my-auto mx-3">
      <a class="footer__item d-flex flex-column align-items-center justify-items-center" ref="call" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Call" href="tel:03134420301" target="_blank">
        <span class="mdi mdi-24px mt-1 mdi-phone mdi-rotate-270"></span>
      </a>
      <a class="footer__item d-flex flex-column align-items-center justify-items-center" ref="email" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Email" href="mailto:hi@dnj.co.ir" target="_blank">
        <span class="mdi mdi-24px mt-1 mdi-email"></span>
      </a>
      <a class="footer__item d-flex flex-column align-items-center justify-items-center" ref="telegram" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Telegram" href="https://t.me/dnjco" target="_blank">
        <span class="mdi mdi-24px mt-1 mdi-send"></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Tooltip } from "bootstrap";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  mounted() {
    new Tooltip(this.$refs.telegram)
    new Tooltip(this.$refs.email)
    new Tooltip(this.$refs.call)
  },
});
</script>

<style lang="scss" scoped>
.footer {
  &__title {
    text-align: right;
    direction: rtl;
    color: #173d7a;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
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
    cursor: pointer;
    text-decoration: none;

    & span {
      color: white;
    }
  }
}
</style>