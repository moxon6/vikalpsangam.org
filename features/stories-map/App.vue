<template>
  <div>
    <p>Hello {{ bundler }}</p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      bundler: "Parcel",
    };
  },
});
</script>

<style lang="scss">
.container {
  color: green;
}
</style>