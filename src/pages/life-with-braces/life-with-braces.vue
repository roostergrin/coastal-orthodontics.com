<template lang='pug' src='./life-with-braces.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'life-with-braces',
  computed: {
    props () {
      return this.$store.state.pages['life-with-braces']
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
