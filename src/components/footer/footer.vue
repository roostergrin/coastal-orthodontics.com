<template lang='pug' src='./footer.pug'></template>

<script>
import Vue from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha, { siteKey: '6LeB050UAAAAAJiB8XLVsRUelzbatlIcdHteLaBb' })

export default {
  name: 'footer',
  computed: {
    props () {
      return this.$store.state.pages['footer']
    },
    links () {
      return this.$store.state.loading
    }
  },
  methods: {
    recaptcha () {
      this.$recaptcha('login').then((token) => {
        console.log(token) // Will print the token
      })
    }
  },
  template: '<button @click="recaptcha">Execute recaptcha</button>'
}
</script>
