<template>
  <div class="jsm">
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
export default {
  async asyncData({ $shopify, params }) {
    const products = await $shopify.product.fetchAll()
    return { products }
  },
}
</script>

<style></style>
