<template>
  <div class="container">
    <div>
      <h1 class="title">
        About
      </h1>
      <h2 class="subtitle">
        About page here
      </h2>
      <div class="links">
        <nuxt-link to="/" class="button--green">Home</nuxt-link>        
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
