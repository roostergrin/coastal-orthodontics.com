<template lang='pug' src='./orthodontic-faqs.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'orthodontic-faqs',
  computed: {
    props () {
      return this.$store.state.pages['orthodontic-faqs']
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
