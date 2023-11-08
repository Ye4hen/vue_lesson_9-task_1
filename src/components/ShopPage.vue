<template>
    <div class="shop__page">
        <ul class="shop__list">
            <h2>Список товарів:</h2>
            <li
                v-for="product in productsList"
                :key="product.id"
                class="shop__item"
                @click="goToProductsList(product.id)"
            >
                <h5>{{ product.title }}</h5>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ShopPage',

    computed: {
        ...mapGetters(['productsList']),
    },
    methods: {
        ...mapActions(['getProductsList']),
        goToProductsList(id) {
            this.$router.push({
                name: 'product',
                params: {
                    productId: id,
                },
            })
        },
    },
    created() {
        this.getProductsList()
    },
}
</script>

<style>
</style>