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
  <header>
    <h1 class="title">Ellen Merchant</h1>
    <h4 class="subtitle">
      Qualified Software Developer with over
      {{ experience }} years industry
      experience
    </h4>
  </header>
</template>
