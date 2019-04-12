<template lang='pug' src='./wareham-office-location.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'wareham-office-location',
  computed: {
    props () {
      return this.$store.state.pages['wareham-office-location']
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
