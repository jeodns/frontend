<template>
  <div class="content__container mx-3 mx-md-0 pb-5 pb-md-0">
    <p class="content__title">
      <span class="content__title-brand"> JeoDNS </span>
      <span class="iransans" style="color: var(--primary-color)">؛ سرویس ابری </span>
      <span class="iransans"> جدید</span>
    </p>
    <p class="content__text iransans ms-md-5">
      سرویس JeoDNS یک قطعه مهم از پازل زیر ساخت ابری شرکت داده نگار جی است که به ما این امکان را می‌دهد که کاربران یک دامنه اینترنتی را براساس موقعیت جغرافیایی آن ها به سرور های مختلفی در سراسر جهان هدایت کنیم.
      اهمیت این سرویس برای خدمات دهندگان بالا دستی مثل CDN ها و سرویس های تحریم گریز قابل توجه می‌باشد.
      به جز قابلیت Geo-Based DNS، این سرویس دارای API قوی برای مدیریت Zone ها و رکورد ها می‌باشد.
    </p>
  </div>
</template>

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
    max-width: 560px;
    font-size: 13px;
    text-align: right;
    direction: rtl;
    color: white;
  }
}
</style>