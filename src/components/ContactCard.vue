<template>
  <form class="contact-card__container px-4 needs-validation" novalidate>
    <p class="contact-card__title mb-4">
      ما برای همکاری با شما آماده ایم؛ <br />
      با ما در تماس باشید!
    </p>
    <input
      :value="name"
      id="name"
      type="text"
      class="contact-card__input form-control"
      :class="(validationFeedbacks.name) ? 'not-valid' : ''"
      placeholder="نام شما"
      required
      minlength="5"
      @input="onNameInputHandler"
    />
    <p class="contact-card__validation-feedback ">{{ validationFeedbacks.name }}</p>
    <input
      :value="phoneNumber"
      id="phoneNumber"
      type="text"
      class="contact-card__input mt-4 form-control"
      :class="(validationFeedbacks.phoneNumber) ? 'not-valid' : ''"
      placeholder="شماره تماس"
      @input="onPhoneNumberInputHandler"
    />
    <p class="contact-card__validation-feedback ">{{ validationFeedbacks.phoneNumber }}</p>
    <textarea
      :value="message"
      id="message"
      class="contact-card__textarea form-control mt-4"
      :class="(validationFeedbacks.message) ? 'not-valid' : ''"
      placeholder="پیام شما"
      rows="6"
      @input="onMessageInputHandler"
    ></textarea>
    <p class="contact-card__validation-feedback">{{ validationFeedbacks.message }}</p>
    <button
      @click="submit($event)"
      type="submit"
      class="
        contact-card__submit
        py-2
        mt-4
        d-flex
        flex-row
        justify-content-center
      "
    >
      <span v-if="loading" class="spinner-border text-secondary" role="status" aria-hidden="true"></span>
      <span v-if="!loading" class="mdi mdi-arrow-left-bold" style="color: black"></span>
      <p v-if="!loading" class="mx-1 my-auto">ارسال پیام</p>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    phoneNumber: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['click:submit', 'update:name', 'update:phoneNumber', 'update:message'],
  data() {
    return {
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
      this.validateName(this.name)
      this.validatePhoneNumber(this.phoneNumber)
      this.validateMessage(this.message)
      if (this.isValid) {
        this.$emit('click:submit')
      }
    },
    onNameInputHandler(e: Event) {
      const target = (<HTMLInputElement> e.target)
      const newValue = target.value
      this.$emit('update:name', newValue)
      this.validateName(newValue)
    },
    onPhoneNumberInputHandler(e: Event) {
      const target = (<HTMLInputElement> e.target)
      const newValue = target.value
      this.$emit('update:phoneNumber', newValue)
      this.validatePhoneNumber(newValue)
    },
    onMessageInputHandler(e: Event) {
      const target = (<HTMLInputElement> e.target)
      const newValue = target.value
      this.$emit('update:message', newValue)
      this.validateMessage(newValue)
    },
    validateName(newValue: string) {
      if (!newValue) {
        this.validationFeedbacks.name = 'نام الزامی است'
        this.isValid = false
        return
      }
      if (newValue.length < 5) {
        this.validationFeedbacks.name = 'نام وارد شده باید حداقل 5 کاراکتر باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.name = ''
    },
    validatePhoneNumber(newValue: string) {
      if (!newValue) {
        this.validationFeedbacks.phoneNumber = 'شماره تماس الزامی است'
        this.isValid = false
        return
      }
      if (!(/^-?\d+$/).test(newValue) || newValue.length != 11 || !newValue.startsWith('09')) {
        this.validationFeedbacks.phoneNumber = 'شماره تماس وارد شده معتبر نمی باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.phoneNumber = ''
    },
    validateMessage(newValue: string) {
      if (!newValue) {
        this.validationFeedbacks.message = ' پیام الزامی است'
        this.isValid = false
        return
      }
      if (newValue.length < 10) {
        this.validationFeedbacks.message = 'پیام وارد شده باید حداقل 10 کاراکتر باشد'
        this.isValid = false
        return
      }
      this.isValid = true
      this.validationFeedbacks.message = ''
    },
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
    font-weight: bold;
  }

  &__input,
  &__textarea {
    text-align: right;
    direction: rtl;
    outline: none !important;
    box-shadow: none !important;
    font-size: 13px;
    font-weight: normal;

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
    cursor: pointer;

    & p {
      color: var(--submit-color);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
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
  }
}
</style>