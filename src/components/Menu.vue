<template>
  <div class="d-flex flex-row justify-space-around">
    <MenuItem title="هلدینگ داده نگار جی" href="https://dnj.co.ir"></MenuItem>
    <MenuItem title="جی سرور" href="https://jeyserver.com"></MenuItem>
    <MenuItem title="وب شات" href="https://web-shot.ir"></MenuItem>
    <MenuItem title="JeoIP" href="https://jeoip.ir"></MenuItem>
    <MenuItem title="پشتیبانی" href="https://jeyserver.com/fa/userpanel/ticketing" icon="mdi-headset" icon-color="#F8B713"></MenuItem>
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