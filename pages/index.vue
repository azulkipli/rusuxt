<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        rusuxt
      </h1>
      <Hello :message="msgHello" />
      
      <div class="links">
        <nuxt-link to="/about" class="button--green">About</nuxt-link>
        <a href="https://nuxtjs.org/" target="_blank" class="button--green" rel="noreferrer">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
  
    </div>
  </div>
</template>

<script lang="ts">
import {
  Action,
  Component,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch
} from 'nuxt-property-decorator'

import Logo from '~/components/Logo.vue'
import Hello from '~/components/Hello.vue'
import Counter from '~/components/Counter.vue'

// Dynamic import components
// const Logo = () => import('~/components/Logo.vue')
// const Hello = () => import('~/components/Hello.vue')
// const Counter = () => import('~/components/Counter.vue')

@Component({
  components: {
    Logo,
    Hello,
    Counter
  }
  // async asyncData () {
  //   let { data } = await axios.get(`https://my-api/posts`)
  //   return {
  //     posts: data
  //   }
  // }
})
export default class PageIndex extends Vue {
  data(){
    return { msgHello : "This is skeleton nuxtjs app with typescript" }
  }
  
  @Action('counter/add') addToCounter: any
  counter = 1
  submitAdd () {
    this.addToCounter(Number(this.counter))
    // this.counter = 1
  }
}
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
