<template>
    <div class="payment">
        <payment-page />
    </div>
</template>

<script>
import PaymentPage from '../components/PaymentPage.vue'
// @ is an alias to /src

export default {
    name: 'PaymentView',
    components: { PaymentPage },
}
</script>
