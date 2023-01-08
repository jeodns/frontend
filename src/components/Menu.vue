<template>
  <div class="d-flex flex-row justify-space-around">
    <MenuItem title="پشتیبانی">
      <template #icon>
        <img src="@/assets/icons/headset_mic.svg" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="JeoIP">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="وب شات">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="جی سرور">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="هلدینگ داده نگار جی">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
  </div>
</template>

<script lang="ts">
import MenuItem from "./MenuItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MenuItem,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>