const state= {
        productList: [];
        count: 0;
}
const  getters= {
    allProducts: state => state.productList,
    getCount: state => state.count,
}
const  actions= {
    async getProducts ({ commit }){
        const res = await fetch('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        const data = await res.json();
        // console.log(data.data.product)
        commit('setProduct', data.data.product);
    },
    increaseCount ({commit}) {
        commit('increaseCount')
    },
    decreaseCount ({commit}) {
        commit('decreaseCount')
    }
}

const  mutations= {
    setProduct (state, productList) {
        state.productList = productList;
        console.log(state.productList);
    },
    increaseCount (state) {
        state.count ++;
    },
    decreaseCount (state) {
        state.count --;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}