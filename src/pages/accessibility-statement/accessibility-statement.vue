<template lang='pug' src='./accessibility-statement.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'Accessibility Statement',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer
  },
  data () {
    return {
      companyName: 'Coastal Orthodontics', // Fill this in
      domain: "<a href='https://www.coastal-orthodontics.com'>coastal-orthodontics.com</a>", // Fill this in
      email: "<a href='mailto:coastalorthodontics@gmail.com'>coastalorthodontics@gmail.com</a>", // Fill this in
      phone: "<a href='tel:774-678-0569'>(774) 678-0569</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
