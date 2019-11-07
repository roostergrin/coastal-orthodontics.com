<template lang='pug' src='./dental-monitoring.pug'></template>

<script>
import Hero from 'components/hero/hero'
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages['dental-monitoring']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Hero,
    Loader,
    Header,
    Footer
  }
}
</script>
