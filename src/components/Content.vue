<template>
  <div class="content__container mx-3 mx-md-0 pb-5 pb-md-0">
    <p class="content__title">
      <span class="content__title-brand"> JeoDNS </span>
      <span class="medium-font" style="color: var(--primary-color)">؛ لورم اپسیوم متن</span>
      <span class="medium-font"> ساختگی</span>
    </p>
    <p class="content__text medium-font-num ms-md-5">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
      پیشرو در زبان فارسی ایجاد کرد.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.content {
  &__container {
    z-index: 3;
  }

  &__title {

    font-size: 30px;
    color: white;
    text-align: right;
    direction: rtl;

    &-brand {
      font-size: 36px;
      font-family: 'Poppins';
      font-weight: normal;
    }

  }

  &__text {
    font-size: 13px;
    text-align: right;
    direction: rtl;
    color: white;
  }
}
</style>