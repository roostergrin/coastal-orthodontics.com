<template lang='pug' src='./appointment-request-form.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import { Storage, Auth } from 'aws-amplify'
import config from '@/config'

export default {
  data: () => {
    return {
      yourName: '',
      email: '',
      phoneNumber: '',
      patientBirthday: '',
      message: '',
      agree: false,
      images: 0,
      attachment: [],
      postUrl: api + '/rg-mail/v1/virtualform',
      imageUrl: 'https://s3-us-west-2.amazonaws.com/uploader-images/private/us-west-2%3A022601fa-f8f4-4950-bfcf-d43e0fe5dcd7/',
      formSubmitted: false,
      formSuccess: false,
      modalShowing: false
    }
  },
  async created () {
    Auth.signIn(config.website.EMAIL, config.website.SECRET)
  },
  methods: {
    upload () {
      const files = this.$refs.uploads.files
      this.images = files.length
      for (let file = 0; file <= files.length - 1; file++) {
        var filename = `${Date.now()}-${files[file].name}`
        this.attachment.push(this.imageUrl + filename)
        Storage.vault.put(filename, files[file], { contentType: files[file].type })
      }
    },
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    closeModal () {
      this.formSuccess = false
      this.formSubmitted = false
      setTimeout(() => {
        this.modalShowing = false
      }, 150)
    },
    onSubmit () {
      this.formSubmitted = true
      axios.post(this.postUrl, {
        yourName: this.yourName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        patientBirthday: this.patientBirthday,
        message: this.message,
        agree: this.agree,
        attachment: this.attachment
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            window.location.href = 'https://www.coastal-orthodontics.com/thank-you'
          }, 400)
          setTimeout(() => {
            this.yourName = ''
            this.email = ''
            this.phoneNumber = ''
            this.patientBirthday = ''
            this.message = ''
            this.agree = ''
            this.attachment = []
          }, 1000)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
