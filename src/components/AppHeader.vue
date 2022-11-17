<template>
  <header>
    <h1 class="title">Ellen Merchant</h1>
    <h4 class="subtitle">
      Qualified Software Developer with over
      {{ Math.abs(new Date(Date.now() - new Date("01/05/2010").getTime()).getUTCFullYear() - 1970) }} years industry
      experience
    </h4>
  </header>
</template>
