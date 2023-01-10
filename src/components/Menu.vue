<template>
  <div class="d-flex flex-row justify-space-around">
    <MenuItem title="پشتیبانی" href="https://jeyserver.com/fa/userpanel/ticketing">
      <template #icon>
        <img src="@/assets/icons/headset_mic.svg" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="JeoIP" href="https://jeoip.ir">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="وب شات" href="https://web-shot.ir">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="جی سرور" href="https://jeyserver.com">
      <template #icon>
        <img src="@/assets/icons/left-chevron.png" alt="" />
      </template>
    </MenuItem>
    <MenuItem title="هلدینگ داده نگار جی" href="https://dnj.co.ir">
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