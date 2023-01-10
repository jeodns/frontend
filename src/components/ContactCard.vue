<template>
  <form class="contact-card__container px-4 needs-validation" novalidate>
    <p class="contact-card__title bold-font mb-4">
      ما برای همکاری با شما آماده ایم؛ <br />
      با ما در تماس باشید!
    </p>
    <input
      v-model="name"
      id="name"
      type="text"
      class="contact-card__input regular-font form-control"
      :class="(validationFeedbacks.name) ? 'not-valid' : ''"
      placeholder="نام شما"
      required
      minlength="5"
      @input="validateName"
    />
    <p class="contact-card__validation-feedback regular-font">{{ validationFeedbacks.name }}</p>
    <input
      v-model="phoneNumber"
      id="phoneNumber"
      type="text"
      class="contact-card__input mt-4 regular-font form-control"
      :class="(validationFeedbacks.phoneNumber) ? 'not-valid' : ''"
      placeholder="شماره تماس"
      @input="validatePhoneNumber"
    />
    <p class="contact-card__validation-feedback regular-font">{{ validationFeedbacks.phoneNumber }}</p>
    <textarea
      v-model="message"
      id="message"
      class="contact-card__textarea form-control mt-4 regular-font"
      :class="(validationFeedbacks.message) ? 'not-valid' : ''"
      placeholder="پیام شما"
      rows="6"
      @input="validateMessage"
    ></textarea>
    <p class="contact-card__validation-feedback regular-font">{{ validationFeedbacks.message }}</p>
    <div
      @click="submit($event)"
      class="
        contact-card__submit
        py-2
        mt-4
        d-flex
        flex-row
        justify-content-center
      "
    >
      <p class="medium-font mx-1 my-auto">ارسال پیام</p>
      <span class="mdi mdi-arrow-left-bold" style="color: black"></span>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: '',
      phoneNumber: '',
      message: '',
      validationFeedbacks: {
        name: '',
        phoneNumber: '',
        message: ''
      },
      isValid: false,
    }
  },
  methods: {
    submit(event: MouseEvent) {
      event.preventDefault()
      this.validateName()
      this.validatePhoneNumber()
      this.validateMessage()
      if (this.isValid) {
        this.$emit('submit', {
          name: this.name,
          phoneNumber: this.phoneNumber,
          message: this.message
        })
        this.clearInputs()
      }
    },
    validateName() {
      if (!this.name) {
        this.validationFeedbacks.name = 'نام الزامی است'
        this.isValid = false
        return
      }
      if (this.name.length < 5) {
        this.validationFeedbacks.name = 'نام وارد شده باید حداقل 5 کاراکتر باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.name = ''
    },
    validatePhoneNumber() {
      if (!this.phoneNumber) {
        this.validationFeedbacks.phoneNumber = 'شماره تماس الزامی است'
        this.isValid = false
        return
      }
      if (!(/^-?\d+$/).test(this.phoneNumber) || this.phoneNumber.length != 11 || !this.phoneNumber.startsWith('09')) {
        this.validationFeedbacks.phoneNumber = 'شماره تماس وارد شده معتبر نمی باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.phoneNumber = ''
    },
    validateMessage() {
      if (!this.message) {
        this.validationFeedbacks.message = ' پیام الزامی است'
        this.isValid = false
        return
      }
      if (this.message.length < 10) {
        this.validationFeedbacks.message = 'پیام وارد شده باید حداقل 10 کاراکتر باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.message = ''
    },
    clearInputs() {
      this.name = '',
      this.phoneNumber = '',
      this.message = ''
    }
  },
});
</script>

<style lang="scss" scoped>
.contact-card {
  &__container {
    min-width: 367px;
    max-width: 367px;
    margin-bottom: -5%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 12px 10px rgba(23, 61, 122, 0.09);
    box-shadow: 0px 5px 12px 10px rgba(23, 61, 122, 0.09);
    z-index: 3;
    opacity: 1;
    padding: 30px 0px;

    @media (max-width: 768px) {
      width: 90%;
      min-width: 90%;
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

  &__input,
  &__textarea {
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

    &.not-valid {
      border: 1px solid red;
      &::placeholder {
        color: red;
      }
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

  &__validation-feedback {
    color: red;
    font-size: 12px;
    margin-top: 3px;
    text-align: right;
    direction: rtl;
  }
}
</style>