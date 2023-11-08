<template>
    <div class="products">
        <products-page />
    </div>
</template>

<script>
import ProductsPage from '../components/ProductsPage.vue'
// @ is an alias to /src

export default {
    name: 'ProductsView',
    components: { ProductsPage },
}
</script>