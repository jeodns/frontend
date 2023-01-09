<template>
  <div class="drawer-menu__container mx-4 pt-3">
    <div class="d-flex flex-row justify-content-between">
      <img src="@/assets/icons/menu-burger.svg" alt="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <Brand />
    </div>
    <div class="drawer-menu__offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="drawer-menu__items d-flex flex-column align-items-end mx-4 mt-4">
        <MenuItem title="هلدینگ داده نگار جی" color="#173D7A">
          <template #icon>
            <img src="@/assets/icons/left-chevron-dark.svg" alt="" />
          </template>
        </MenuItem>
        <MenuItem title="جی سرور" color="#173D7A">
          <template #icon>
            <img src="@/assets/icons/left-chevron-dark.svg" alt="" />
          </template>
        </MenuItem>
        <MenuItem title="وب شات" color="#173D7A">
          <template #icon>
            <img src="@/assets/icons/left-chevron-dark.svg" alt="" />
          </template>
        </MenuItem>
        <MenuItem title="JeoIP" color="#173D7A">
          <template #icon>
            <img src="@/assets/icons/left-chevron-dark.svg" alt="" />
          </template>
        </MenuItem>
        <div class="drawer-menu__divider"></div>
        <MenuItem title="پشتیبانی" color="#173D7A">
          <template #icon>
            <img src="@/assets/icons/headset_mic.svg" alt="" />
          </template>
        </MenuItem>
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