<template>
  <div class="app-container">
    <home class="page"></home>
    <product-section class="page"></product-section>
    <service-section class="page"></service-section>
    <team-section class="page"></team-section>
    <contact-section class="page"></contact-section>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import ProductSection from './views/Sections/Cases.vue';
import ServiceSection from './views/Sections/Services.vue';
import TeamSection from './views/Sections/Team.vue';
import ContactSection from './views/Sections/Contact.vue'

export default {
  views: {
    Home,
    ProductSection,
    ServiceSection,
    TeamSection,
    ContactSection
  }
}
</script>

<style scoped>
/* App.vue */
.app-container {
  position: relative;
  min-height: 100vh;
}

.page {
  position: relative;
  z-index: 2;
  padding: 40px 0;
}
</style>