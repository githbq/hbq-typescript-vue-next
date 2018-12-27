<template>
  <div id="app">
    <span>33333</span>
    <VueComponentGood />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VueComponentGood from './components/VueComponentGood.vue'
@Component({
  components: { VueComponentGood }
})
export default class App extends Vue { }
</script>

<style lang="stylus">
body {
  font-size: 14px;
  margin: 0;
}

.divider {
  height: 10px;
  background-color: #f0f0f0;
}
</style>
