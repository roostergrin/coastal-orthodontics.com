<template lang='pug' src='./contact-form.pug'></template>
<script>

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      formSubmitted: false
      // verified: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.$el.children[0].submit()
        } else {
        }
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
