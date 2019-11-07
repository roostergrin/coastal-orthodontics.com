import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import MeetDrKevinOliveria from '@/pages/meet-dr-kevin-oliveira/meet-dr-kevin-oliveira'
import WhatSetsUsApart from '@/pages/what-sets-us-apart/what-sets-us-apart'
import MeetTheTeam from '@/pages/meet-the-team/meet-the-team'
import OfficeVisits from '@/pages/office-visits/office-visits'
import FinancialInformation from '@/pages/financial-information/financial-information'
import PatientForms from '@/pages/patient-forms/patient-forms'
import OrthodonticFaqs from '@/pages/orthodontic-faqs/orthodontic-faqs'
import Testimonials from '@/pages/testimonials/testimonials'
import AboutOrthodontics from '@/pages/about-orthodontics/about-orthodontics'
import LifeWithBraces from '@/pages/life-with-braces/life-with-braces'
import BrushingFlossing from '@/pages/brushing-and-flossing/brushing-and-flossing'
import ForAllAges from '@/pages/for-all-ages/for-all-ages'
import EarlyPrevention from '@/pages/early-prevention/early-prevention'
import OrthodonticRetention from '@/pages/orthodontic-retention/orthodontic-retention'
import EmergencyCare from '@/pages/emergency-care/emergency-care'
import TypesOfAppliances from '@/pages/types-of-appliances/types-of-appliances'
import PalatalExpander from '@/pages/palatal-expander/palatal-expander'
import TypesOfBraces from '@/pages/types-of-braces/types-of-braces'
import SurgicalOrthodontics from '@/pages/surgical-orthodontics/surgical-orthodontics'
import Tads from '@/pages/tads/tads'
import DentalMonitoring from '@/pages/dental-monitoring/dental-monitoring'
import AcceledentAura from '@/pages/acceledent-aura/acceledent-aura'
import InvisalignInfo from '@/pages/invisalign-info/invisalign-info'
import InvisalignTeenInfo from '@/pages/invisalign-teen-info/invisalign-teen-info'
import InvisalignCosts from '@/pages/invisalign-costs/invisalign-costs'
import InvisalignFaqs from '@/pages/invisalign-faqs/invisalign-faqs'
import InvisalignVideos from '@/pages/invisalign-videos/invisalign-videos'
import InvisalignBeforeAfter from '@/pages/invisalign-before-after/invisalign-before-after'
import InvisalignTestimonials from '@/pages/invisalign-testimonials/invisalign-testimonials'
import WarehamOfficeLocation from '@/pages/wareham-office-location/wareham-office-location'
import AppointmentRequest from '@/pages/appointment-request/appointment-request'
import PostAppointmentSurvey from '@/pages/post-appointment-survey/post-appointment-survey'
import CommonTreatments from '@/pages/common-treatments/common-treatments'
import ThankYou from '@/pages/thank-you/thank-you'
import Sitemap from '@/pages/sitemap/sitemap'
import Contact from '@/pages/contact-us/contact-us'
import Virtualsmile from '@/pages/virtualsmile/virtualsmile'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import Styleguide from '@/styleguide/styleguide'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      navigation: true,
      component: Home
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      navigation: true,
      component: Sitemap
    },
    {
      path: '/thank-you',
      name: 'Thank You',
      navigation: true,
      component: ThankYou
    },
    {
      path: '/common-treatments',
      name: 'common treatments',
      navigation: true,
      component: CommonTreatments
    },
    {
      path: '/post-appointment-survey',
      name: 'Post Appointment Survey',
      navigation: true,
      component: PostAppointmentSurvey
    },
    {
      path: '/appointment-request',
      name: 'appointment-request',
      navigation: true,
      component: AppointmentRequest
    },
    {
      path: '/invisalign-testimonials',
      name: 'Invisalign Testimonials',
      navigation: true,
      component: InvisalignTestimonials
    },
    {
      path: '/wareham-office-location',
      name: 'wareham office location',
      navigation: true,
      component: WarehamOfficeLocation
    },
    {
      path: '/invisalign-before-after',
      name: 'Invisalign Before After',
      navigation: true,
      component: InvisalignBeforeAfter
    },
    {
      path: '/invisalign-videos',
      name: 'invisalign videos',
      navigation: true,
      component: InvisalignVideos
    },
    {
      path: '/invisalign-faqs',
      name: 'Invisalign Faqs',
      navigation: true,
      component: InvisalignFaqs
    },
    {
      path: '/invisalign-costs',
      name: 'Invisalign Costs',
      navigation: true,
      component: InvisalignCosts
    },
    {
      path: '/invisalign-teen-info',
      name: 'Invisalign Teen Info',
      navigation: true,
      component: InvisalignTeenInfo
    },
    {
      path: '/invisalign-info',
      name: 'Invisalign Info',
      navigation: true,
      component: InvisalignInfo
    },
    {
      path: '/acceledent-aura',
      name: 'Acceledent Aura',
      navigation: true,
      component: AcceledentAura
    },
    {
      path: '/tads',
      name: 'tads',
      navigation: true,
      component: Tads
    },
    {
      path: '/dental-monitoring',
      name: 'Dental Monitoring',
      navigation: true,
      component: DentalMonitoring
    },
    {
      path: '/surgical-orthodontics',
      name: 'surgical orthodontics',
      navigation: true,
      component: SurgicalOrthodontics
    },
    {
      path: '/types-of-braces',
      name: 'types of braces',
      navigation: true,
      component: TypesOfBraces
    },
    {
      path: '/palatal-expander',
      name: 'Palatal Expander',
      navigation: true,
      component: PalatalExpander
    },
    {
      path: '/types-of-appliances',
      name: 'Types Of Appliances',
      navigation: true,
      component: TypesOfAppliances
    },
    {
      path: '/emergency-care',
      name: 'Emergency Care',
      navigation: true,
      component: EmergencyCare
    },
    {
      path: '/orthodontic-retention',
      name: 'Orthodontic Retention',
      navigation: true,
      component: OrthodonticRetention
    },
    {
      path: '/early-prevention',
      name: 'Early Prevention',
      navigation: true,
      component: EarlyPrevention
    },
    {
      path: '/for-all-ages',
      name: 'for all ages',
      navigation: true,
      component: ForAllAges
    },
    {
      path: '/brushing-and-flossing',
      name: 'brushing and flossing',
      navigation: true,
      component: BrushingFlossing
    },
    {
      path: '/life-with-braces',
      name: 'life-with-braces',
      navigation: true,
      component: LifeWithBraces
    },
    {
      path: '/about-orthodontics',
      name: 'About Orthodontics',
      navigation: true,
      component: AboutOrthodontics
    },
    {
      path: '/testimonials',
      name: 'testimonial',
      navigation: true,
      component: Testimonials
    },
    {
      path: '/orthodontic-faqs',
      name: 'orthodontic faqs',
      navigation: true,
      component: OrthodonticFaqs
    },
    {
      path: '/patient-forms',
      name: 'patient forms',
      navigation: true,
      component: PatientForms
    },
    {
      path: '/financial-information',
      name: 'financial-information',
      navigation: true,
      component: FinancialInformation
    },
    {
      path: '/office-visits',
      name: 'office-visits',
      navigation: true,
      component: OfficeVisits
    },
    {
      path: '/meet-the-team',
      name: 'meet-the-team',
      navigation: true,
      component: MeetTheTeam
    },
    {
      path: '/what-sets-us-apart',
      name: 'what-sets-us-apart',
      navigation: true,
      component: WhatSetsUsApart
    },
    {
      path: '/meet-dr-kevin-oliveira',
      name: 'Meet Dr Kevin Oliveira',
      navigation: true,
      component: MeetDrKevinOliveria
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: Contact,
      children: [
        {
          path: '/contact#form',
          name: 'contact form'
        }
      ]
    },
    {
      path: '/virtualsmile',
      name: 'Virtualsmile',
      navigation: false,
      component: Virtualsmile
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
