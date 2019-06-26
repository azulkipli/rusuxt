<template>
  <h4>Counter is at {{ getCount }}</h4>
</template>

<script lang="ts">
import { Component, Vue, Getter } from 'nuxt-property-decorator'
@Component
export default class Counter extends Vue {
  @Getter('counter/getCount') getCount: any
}
</script>