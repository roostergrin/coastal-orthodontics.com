<template lang='pug' src='./orthodontic-retention.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'orthodontic-retention',
  computed: {
    props () {
      return this.$store.state.pages['orthodontic-retention']
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
