<template lang='pug' src='./post-appointment-survey.pug'></template>

<script>
export default {
  components: {
  },
  data: () => {
    return {
      formSubmitted: false
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
