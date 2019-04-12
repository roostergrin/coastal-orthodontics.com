<template lang='pug' src='./types-of-appliances.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'types-of-appliances',
  computed: {
    props () {
      return this.$store.state.pages['types-of-appliances']
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
