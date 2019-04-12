<template lang='pug' src='./post-appointment-survey.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import PostAppointmentSurveyI from 'components/post-appointment-survey/post-appointment-survey'

export default {
  name: 'post-appointment-survey',
  computed: {
    props () {
      return this.$store.state.pages['post-appointment-survey']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    PostAppointmentSurveyI,
    Footer
  }
}
</script>
