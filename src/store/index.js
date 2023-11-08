import { createStore } from "vuex";
import products from "../data/productsData.json"


export default createStore({
	state() {
		return {
			productsLists: [],
		}
	},
	getters: {
		productsList: ({ productsLists }) => productsLists,
		getProductsListById: (state) => {
			return (productsListId) => {
				return {
					...state.productsLists.find((productList) =>
						productList.id == productsListId
					)
				}
			}
		},
	},
	mutations: {
		setProductsList(state, list) {
			state.productsLists = list
		},
	},
	actions: {
		getProductsList({ commit }) {
			commit("setProductsList", products)
		},

	},
});
