<template lang='pug' src='./virtualsmile.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import AppointmentRequestForm from 'components/form/appointment-request-form/appointment-request-form'

export default {
  name: 'virtualsmile',
  computed: {
    props () {
      return this.$store.state.pages['virtualsmile']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer,
    AppointmentRequestForm
  }
}
</script>
