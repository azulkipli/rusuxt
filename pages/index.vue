<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
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

// import Logo from '~/components/Logo.vue'
import Hello from '~/components/Hello.vue'
import Counter from '~/components/Counter.vue'

// Dynamic import components
// const Logo = () => import('~/components/Logo.vue')
// const Hello = () => import('~/components/Hello.vue')
// const Counter = () => import('~/components/Counter.vue')

@Component({
  components: {
    // Logo,
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
