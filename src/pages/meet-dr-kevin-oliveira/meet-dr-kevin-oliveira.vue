<template lang='pug' src='./meet-dr-kevin-oliveira.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'meet-dr-kevin-oliveira',
  computed: {
    props () {
      return this.$store.state.pages['meet-dr-kevin-oliveira']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer
  }
}
</script>
