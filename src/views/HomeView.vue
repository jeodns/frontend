<template>
  <div>
    <div class="home-main">
      <div class="home-main__background"></div>
      <div class="home-main__circle"></div>
      <div class="home-main__light-cube-1"></div>
      <div class="home-main__light-cube-2"></div>
      <div class="home-main__wave"></div>
      <div class="home-main__header d-flex flex-row justify-content-between pt-4 px-5">
        <Menu class="home-main__header-menu"/>
        <Brand class="home-main__header-brand"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col" style="z-index: 3">
            <ContactCard/>
          </div>
          <div class="col" style="z-index: 3">
            
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Menu from "@/components/Menu.vue";
import Brand from "@/components/Brand.vue";
import Footer from "@/components/Footer.vue";
import ContactCard from "@/components/ContactCard.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Menu,
    Brand,
    Footer,
    ContactCard
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.home {
  &-main {
    height: 80vh;
    position: relative;
    z-index: 1;

    &__header {
      width: 100%;
      &-menu {
        gap: 2.5rem;
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
      z-index: 1;
    }

    &__circle {
      width: 111px;
      height: 111px;
      border-radius: 50%;
      position: absolute;
      left: 39%;
      top: 18%;
      background: rgb(28,64,242);
      background: linear-gradient(90deg, rgba(28,64,242,1) 10%, rgba(22,106,244,1) 40%, rgba(15,157,247,1) 70%, rgba(3,248,251,1) 100%);
      z-index: 2;
    }

    &__light-cube {
      &-1 {
        width: 54px;
        height: 129px;
        background: url('../assets/icons/light-cube.svg');
        z-index: 2;
        opacity: 1;
        position: absolute;
        right: 7%;
        top: 15%;
      }

      &-2 {
        width: 54px;
        height: 129px;
        background: url('../assets/icons/light-cube.svg');
        z-index: 2;
        opacity: 1;
        position: absolute;
        left: 45%;
        top: 50%;
      }
    }

    &__wave {
      width: 100%;
      height: 120px;
      background: url('../assets/icons/waves.svg');
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0;
      z-index: 2;
    }
  }

  &-footer {
    height: 100%;
  }
}
</style>
