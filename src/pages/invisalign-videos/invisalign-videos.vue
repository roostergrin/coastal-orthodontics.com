<template lang='pug' src='./invisalign-videos.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'invisalign-videos',
  computed: {
    props () {
      return this.$store.state.pages['invisalign-videos']
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
