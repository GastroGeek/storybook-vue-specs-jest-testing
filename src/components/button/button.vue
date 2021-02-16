<template>
  <button class="btn" @click="msg"><slot /></button>
</template>

<script>

export default {
  name: 'MyButton',
  methods: {
    msg () {
      console.log('I am alive')
    }
  }
}

</script>

<style>
  @import './button.css';
</style>