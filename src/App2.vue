<template>
  <div id="app">
    <span>hello word</span>
    <aaa-bbb />
    <VueComponentGood />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VueComponentGood from './components/VueComponentGood.vue'

const httpVueLoader = (window as any).httpVueLoader

@Component({
  components: {
    VueComponentGood,
    aaaBbb: httpVueLoader('/static/aaa.vue')
  }
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
