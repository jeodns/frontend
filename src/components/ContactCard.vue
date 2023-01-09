<template>
  <div class="contact-card__container px-4">
    <p class="contact-card__title bold-font">ما برای همکاری با شما آماده ایم؛ <br/>  با ما در تماس باشید!</p>
    <input type="text" class="contact-card__input regular-font form-control" placeholder="نام شما">
    <input type="number" class="contact-card__input mt-4 regular-font form-control" placeholder="شماره تماس">
    <textarea class="contact-card__textarea form-control mt-4 regular-font" placeholder="پیام شما" rows="6"></textarea>
    <button class="contact-card__submit py-2 mt-4 d-flex flex-row justify-content-center">
      <p class="medium-font mx-1 my-auto">ارسال پیام</p>
      <img class="my-auto" src="@/assets/icons/arrow-left.svg" alt="">
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>



.contact-card {
  &__container {
    min-width: 367px;
    max-width: 367px;
    margin-bottom: -5%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 12px 10px rgba(23,61,122,0.09); 
    box-shadow: 0px 5px 12px 10px rgba(23,61,122,0.09);
    z-index: 3;
    opacity: 1;
    padding: 30px 0px;

    @media (max-width: 768px) {
      height: 100%;
      margin-bottom: -15%;
    }
  }

  &__title {
    color: var(--title-color);
    font-size: 22px;
    text-align: right;
    direction: rtl;
  }

  &__input, &__textarea {
    text-align: right;
    direction: rtl;
    outline: none !important;
    box-shadow: none !important;
    font-size: 13px;

    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    &::placeholder {
      color: #ccc;
    }
  }

  &__input {
    min-height: 45px;
  }

  &__textarea {
    min-height: 66px;
  }

  &__submit {
    width: 100%;
    color: var(--primary-color);
    background-color: var(--primary-color);
    border: none;
    border-radius: 5px;

    & p {
      color: var(--submit-color);
      font-size: 14px;
    }

    & img {
      width: 28px;
      height: 28px;
    }
  }
}
</style>