<template>
  <div class="jsm">
    <slice-zone type="page" uid="homepage" />
    <div v-if="products">
      <figure v-for="product in products" :key="product.id">
        <img
          :src="product.images[0].src"
          :alt="`${product.title} product shot`"
          v-if="product.images"
        />
        <figcaption>{{ product.title }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  components: {
    SliceZone,
  },
  async asyncData({ $shopify }) {
    const products = await $shopify.product.fetchAll()
    return { products }
  },
}
</script>

<style></style>
