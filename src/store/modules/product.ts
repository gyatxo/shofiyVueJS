const state= {
        productList: [],
        itemCount: 0,
        userItem: [],
}
const  getters= {
    allProducts: state => state.productList,
    getCount: state => state.productCount,
    userItem: state => state.userItem
}
const  actions= {
    async getProducts ({ commit }){
        const res = await fetch('https://electronic-ecommerce.herokuapp.com/api/v1/product');
        const data = await res.json();
        data.data.product.forEach((product)=> product.productCount=0)
        console.log(data.data.product)
        commit('setProduct', data.data.product);
    },
    setUserItem ({commit}, addedItem) {
        commit('setUserItem' , addedItem);
    },
    removeCart ({commit}, id : Number) {
        commit('removeCart' , id)
    }
}

const  mutations= {
    setProduct (state, productList) {
        state.productList= productList;
    },
    setUserItem (state:object, addedItem:object) {
        let index= state.userItem.findIndex((product)=> product.id == addedItem.id);
        if(index < 0){
            state.userItem = [...state.userItem, addedItem];
            console.log(state.userItem);
        }
        else{
            state.userItem = [...state.userItem];
            console.log(state.userItem);
        }
    },
    removeCart (state, id) {
        let cartItems = state.userItem.filter((item)=> item.id !== id);
        state.userItem = cartItems;
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}