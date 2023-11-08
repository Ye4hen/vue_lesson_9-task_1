<template>
    <div class="products__page">
        <ul class="products__list">
            <li v-for="product in currentProductsList.list" :key="product.id" class="products__item">
                <a :href="product.link" class="products__image">
                    <img :src="product.image" :alt="product.name" />
                </a>
                <div class="products__info">
                    <h4 class="products__name">
                        <a :href="product.link" class="products__title-link">{{ product.name }}</a>
                    </h4>
                    <strong class="products__price"> {{ product.price }}$ </strong>
                </div>
            </li>
        </ul>
        <div class="products__buttons">
            <button @click="toHome" class="products__button">На головну</button>
            <button @click="toShop" class="products__button">Назад</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductsPage',

    data() {
        return {
            currentProductsList: {},
        }
    },
    computed: {
        ...mapGetters(['getProductsListById']),
        productId() {
            return this.$route.params.productId
        },
    },

    methods: {
        toHome() {
            this.$router.push({
                name: 'home',
            })
        },
        toShop() {
            this.$router.push({
                name: 'shop',
            })
        },
    },

    created() {
        this.currentProductsList = this.getProductsListById(this.productId)
    },
}
</script>

<style>
</style>