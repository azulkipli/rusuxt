<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        rusuxt
      </h1>
      <h2 class="subtitle">
        NuxtJS skeleton app with typescript
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch
} from 'nuxt-property-decorator'
@Component({
  components: {
    Logo: () => import('~/components/Logo.vue')
  }
  // async asyncData () {
  //   let { data } = await axios.get(`https://my-api/posts`)
  //   return {
  //     posts: data
  //   }
  // }
})
export default class PageIndex extends Vue {}
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
