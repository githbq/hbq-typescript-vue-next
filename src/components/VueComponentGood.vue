<template>
  <div class="center">
    <a class="text">{{title}} ok </a>
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
        return 'you are right'
      }
    },
    mounted () { 
      this
      this.title = this.output('mounted')
    }
  })
</script>
