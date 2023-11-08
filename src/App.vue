<template>
    <nav>
        <router-link to="/">Головна</router-link>
        <router-link to="/shop">Магазин</router-link>
        <router-link to="/payment">Правила оплати</router-link>
        <router-link to="/contacts">Контакти</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
@import './assets/style/';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
    //   text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        padding: 5px;
        font-weight: bold;
        color: #2c3e50;
        transition: all 0.3s;
        border-radius: 12px;
        border: 3px solid transparent;
        @media (any-hover: hover) {
            &:hover {
                color: red;
                border: 3px solid red;
            }
        }

        &.router-link-exact-active {
            color: red;
            border: 3px solid red;
        }
    }
}
</style>
