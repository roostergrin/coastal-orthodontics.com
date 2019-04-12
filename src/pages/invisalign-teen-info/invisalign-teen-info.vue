<template lang='pug' src='./invisalign-teen-info.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'invisalign-teen-info',
  computed: {
    props () {
      return this.$store.state.pages['invisalign-teen-info']
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
