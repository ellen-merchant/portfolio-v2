<template>
  <div class="about-me">
    <h2 class="main-title">About Me</h2>
    Hi, I'm Ellen and I currently live in Bristol working as a full time
    Developer. I graduated from Bournemouth University in 2010, gaining a 2:1
    BSc (Hons) in Computing. I specialise in PHP, SQL, HTML, CSS and JavaScript
    and have experience in developing using the
    <a href="https://laravel.com">Laravel</a>
    framework. I have been employed as a full time Developer for over
    {{ moment().diff(moment([2010, 5, 1]), "years") }} years.
    <br />
    <br />My hobbies include walking, gaming, film and TV, music.
    <br />
    <br />Here is my GitHub for your perusal:
    <a target="_blank" href="https://github.com/slipperthepanda"
      >https://github.com/slipperthepanda</a
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
