<template>
    <div class="contacts">
        <contacts-page />
    </div>
</template>

<script>
import ContactsPage from '../components/ContactsPage.vue'
// @ is an alias to /src

export default {
    name: 'ContactsView',
    components: { ContactsPage },
}
</script>
