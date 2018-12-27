<template>
  <div class="center">
    <a class="text">{{title}}111</a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue' 
  export default Vue.extend({ 
    data () {
      return {
        title: 'Typescript',
        name:1,
        x:true,
        y:1
      }
    },
    methods: {
      output (message: string) {
        return '1231'
      }
    },
    mounted () { 
      this
      this.title = this.output('mounted')
    }
  })
</script>
