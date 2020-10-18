<template>
  <div class="jsm">
    <slice-zone type="page" :uid="$route.params.uid" />
    <figure v-for="product in products" :key="product.id">
      <img
        :src="product.images[0].src"
        :alt="`${product.title} product shot`"
        v-if="product.images"
      />
      <figcaption>{{ product.title }}</figcaption>
    </figure>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll()
    return { products }
  },
}
</script>

<style></style>
