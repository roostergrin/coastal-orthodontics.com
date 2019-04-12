<template lang='pug' src='./for-all-ages.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'for-all-ages',
  computed: {
    props () {
      return this.$store.state.pages['for-all-ages']
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
