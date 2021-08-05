<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ explanation }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>