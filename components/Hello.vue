<template>
  <h3>
    {{ message }}
  </h3>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Message, defaultMessage } from '~/models/Message'
@Component
export default class Hello extends Vue {
  @Prop({ default: () => defaultMessage }) readonly message!: Message
}
</script>