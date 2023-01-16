<template>
  <div class="drawer-menu__container mx-4 pt-3">
    <div class="d-flex flex-row justify-content-between">
      <Brand />
      <span class="mdi mdi-24px mdi-menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style="color: white"></span>
    </div>
    <div class="drawer-menu__offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="drawer-menu__items d-flex flex-column mx-4 mt-4">
        <MenuItem title="هلدینگ داده نگار جی" color="#173D7A" icon-color="#173D7A" href="https://dnj.co.ir"></MenuItem>
        <MenuItem title="جی سرور" color="#173D7A" icon-color="#173D7A" href="https://jeyserver.com"></MenuItem>
        <MenuItem title="وب شات" color="#173D7A" icon-color="#173D7A" href="https://web-shot.ir"></MenuItem>
        <MenuItem title="JeoIP" color="#173D7A" icon-color="#173D7A" href="https://jeoip.ir"></MenuItem>
        <div class="drawer-menu__divider"></div>
        <MenuItem title="پشتیبانی" color="#173D7A" icon="mdi-headset" icon-color="#F8B713" href="https://jeyserver.com/fa/userpanel/ticketing"></MenuItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Brand from './Brand.vue';
import MenuItem from './MenuItem.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Brand,
    MenuItem
  },
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.drawer-menu {
  &__container {
    background-color: transparent;
    z-index: 3;
    opacity: 1;
  }

  &__offcanvas {
    width: 70vw;
    border-top-left-radius: 10px;
  }

  &__items {
    gap: 1rem;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #F4F4F4;
  }
}
</style>