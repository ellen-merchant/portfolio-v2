<template>
  <div class="calendar">
    <span class="day">{{ date.toLocaleDateString('utc', {day: "numeric", month: "short"}) }}</span>
    <span class="month">{{ date.toLocaleDateString('utc', {year: "numeric"}) }}</span>
  </div>
</template>

<script>
export default {
  props: ["date"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.calendar {
  text-align: center;
  margin-right: 10px;

  .day {
    background: #fcfcfc;
    padding: 2px 5px;
    display: block;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    -moz-border-radius: 10px 10px 0 0;
    -webkit-border-radius: 10px 10px 0 0;
    border-top: 1px solid #d2d2d2;
    border-right: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;
  }

  .month {
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    display: block;
    padding: 2px 5px;
    border-radius: 0 0 10px 10px;
    -moz-border-radius: 0 0 10px 10px;
    -webkit-border-radius: 0 0 10px 10px;
    background: $pink;
    border-top: 2px solid #d2d2d2;
    border-right: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;
  }
}
</style>
