<template>
  <div class="home-container">
    <Modal v-model="showModal"/>
    <div class="home-main">
      <div class="home-main__background"></div>
      <div class="home-main__circle"></div>
      <div class="home-main__light-cube-1"></div>
      <div class="home-main__light-cube-2"></div>
      <div class="home-main__wave"></div>
      <DrawerMenu class="home-main__drawer d-block d-md-none"/>
      <div class="home-main__header d-none d-md-flex flex-row justify-content-between pt-4 px-5">
        <Menu class="home-main__header-menu"/>
        <Brand class="home-main__header-brand"/>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center flex-md-row-reverse justify-content-md-start mx-md-5 pt-5">
        <Content class="home-main__content"/>
        <ContactCard class="home-main__contact-card me-md-auto" :loading="homeStore.loading" @submit="onContactCardSubmit"/>
      </div>
    </div>
    <div class="home-footer">
      <Footer />
    </div>
    <Snackbar v-model="snackbar" message="خطا در برقراری ارتباط"/>
  </div>
</template>

<script lang="ts">
import Modal from '../components/Modal.vue'
import Snackbar from '../components/Snackbar.vue'
import DrawerMenu from "../components/DrawerMenu.vue";
import Menu from "../components/Menu.vue";
import Brand from "../components/Brand.vue";
import Footer from "../components/Footer.vue";
import ContactCard from "../components/ContactCard.vue";
import Content from "../components/Content.vue"
import type Message from '../types/Message'
import { useHomeStore } from '../stores/home'
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Modal,
    Snackbar,
    DrawerMenu,
    Menu,
    Brand,
    Footer,
    ContactCard,
    Content
  },
  setup() {
    const homeStore = useHomeStore();
    return {homeStore}
  },
  data() {
    return {
      showModal: false,
      snackbar: false
    }
  },
  methods: {
    onContactCardSubmit(message: Message) {
      this.homeStore.sendMessage(message)
      .then(() => {
        this.showModal = true;
      }).catch(() => {
        this.snackbar = true
      })
    }
  }
});
</script>

<style lang="scss" scoped>
.home {
  &-container {
    position: relative;
  }

  &-main {

    height: auto;
    position: relative;
    z-index: 1;
    
    @media (min-width: 768px) {
      height: 85vh;

      &__content {
        margin-top: 50px;
        margin-right: 70px;
      }

      &__contact-card {
        margin-top: 50px;
        margin-left: 60px;
      }
    }

    &__header {
      width: 100%;
      &-menu {
        gap: 2.5rem;
      }

      &-brand {
        margin-right: 60px;
      }
    }

    &__background {
      height: 100%;
      width: 100%;
      background: radial-gradient(circle at 0% 100%, rgba(0,15,87,1) 0%, rgba(45,80,182,1) 25%, rgba(8,26,111,1) 50%, rgba(8,26,111,1) 90%, rgba(0,15,87,1) 100%);
      opacity: 0.89;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &__circle {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      position: absolute;
      left: 32%;
      top: 18%;
      background: rgb(28,64,242);
      background: linear-gradient(90deg, rgba(28,64,242,1) 10%, rgba(22,106,244,1) 40%, rgba(15,157,247,1) 70%, rgba(3,248,251,1) 100%);
      z-index: 3;

      @media (max-width: 768px) {
        display: none;
      }
    }

    &__light-cube {
      &-1 {
        width: 54px;
        height: 129px;
        background: url('../assets/icons/light-cube.svg');
        z-index: 2;
        opacity: 1;
        position: absolute;
        right: 10%;
        top: 15%;

        @media (max-width: 768px) {
          display: none;
        }
      }

      &-2 {
        width: 54px;
        height: 129px;
        background: url('../assets/icons/light-cube.svg');
        z-index: 2;
        opacity: 1;
        position: absolute;
        left: 35%;
        top: 50%;

        @media (max-width: 768px) {
          left: 15%;
          top: 32%;
        }
      }
    }

    &__wave {
      width: 100%;
      height: 100px;
      background: url('../assets/icons/waves.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0;
      z-index: 2;
    }
  }

  &-footer {
    background-color: white;
    z-index: 3;

    @media (max-width: 768px) {
      margin-top: 22%;
      margin-bottom: 30px;
    }
  }
}
</style>
