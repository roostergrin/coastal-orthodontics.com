<template lang='pug' src='./header.pug'></template>

<script>

export default {
  name: 'header',
  computed: {
    props () {
      return this.$store.state.pages['header']
    },
    links () {
      return this.$store.state.loading
    }
  }
}
</script>
