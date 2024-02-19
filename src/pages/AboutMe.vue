<script>
export default {
  data() {
    const workStart = new Date("01/05/2010")
    const difference = new Date(Date.now() - workStart.getTime())
    return {
      experience: Math.abs(difference.getUTCFullYear() - 1970)
    };
  }
};
</script>

<template>
  <div class="about-me">
    <h2 class="main-title">About Me</h2>
    Hi, I'm Ellen and I currently live in Bristol working as a full time
    Developer. I graduated from Bournemouth University in 2010, gaining a 2:1
    BSc (Hons) in Computing. I specialise in PHP, SQL and TyepScript
    and have experience in developing using the
    <a href="https://laravel.com">Laravel</a>
    and <a href="https://nestjs.com">NestJS</a> frameworks. I have been employed as a full time Developer for over
    {{ experience }} years.
    <br />
    <br />My hobbies include walking, gaming, music and watching films and TV.
    <br />
    <br />Here is my GitHub for your perusal:
    <a target="_blank" href="https://github.com/ellen-merchant"
      >https://github.com/ellen-merchant</a
    >
  </div>
</template>

<style lang="scss" scoped>
.about-me {
  text-align: justify;
  padding: 1rem;
  line-height: 1.4rem;
}
</style>
