<template>
  <section class="section">
    <prismic-image
      v-if="slice.primary.illustration"
      :field="slice.primary.illustration"
    />
    <prismic-rich-text v-if="slice.primary.text" :field="slice.primary.text" />
  </section>
</template>
<script>
export default {
  props: ['slice'],
}
</script>
<style scoped>
.section {
  position: relative;
  text-align: center;
}
a {
  color: #111;
}
</style>
