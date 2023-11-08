import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaymentView from "@/views/PaymentView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ShopView from "@/views/ShopView.vue";
import ProductsView from "@/views/ProductsView.vue";


const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/payment",
		name: "payment",
		component: PaymentView,
	},
	{
		path: "/contacts",
		name: "contacts",
		component: ContactsView,
	},
	{
		path: "/shop",
		name: "shop",
		component: ShopView,
	},
	{
		path: "/product/:productId",
		name: "product",
		component: ProductsView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
