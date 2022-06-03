const state= {
        productList: [],
        itemCount: 0,
        userItem: [],
        filterProductList: [],
        filteredProductList: [],
}
const  getters= {
    allProducts: state => state.productList,
    getCount: state => state.itemCount,
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
        commit('removeCart' , id);
    },
    // filterProduct ({commit}, minValue, maxValue, cat) {
    //     commit('filterProduct', minValue, maxValue, cat);
    // }
    test ({commit}, payload){
        // console.log(payload)
        commit('test', payload)
    }
}

const  mutations= {
    setProduct (state, productList) {
        state.productList= productList;
        state.filterProductList= productList;
    },
    setUserItem (state:object, addedItem:object) {
        let index= state.userItem.findIndex((product)=> product.id == addedItem.id);
        if(index < 0){
            state.userItem = [...state.userItem, addedItem];
            state.itemCount++;
        }
        else{
            if((state.userItem[index].productCount += addedItem.productCount) <= addedItem.stock){
            state.userItem[index].productCount += addedItem.productCount; 
            state.userItem = [...state.userItem];
            console.log(state.userItem);
            }
            else{
                let overBy = (state.userItem[index].productCount + addedItem.productCount)-addedItem.stock;
                alert(`Item exceeds the stock limit. Only ${overBy} item left`)
            }
        }
    },
    removeCart (state, id) {
        if(confirm('Are you sure?')){
        let cartItems = state.userItem.filter((item)=> item.id !== id);
        state.userItem = cartItems;
        }
    },
    // filterProduct (state, minValue, maxValue, cat){
    //     if(cat !== '' && minValue !== '' && maxValue !== ''){
    //         state.filteredProductList = state.filterProductList.filter((product)=>
    //         (product.price >= minValue && product.price) <= maxValue && product.category[1] === cat ;
    //         )
    //     }else{
    //         console.log('filter failed')
    //     }
    //     console.log(state.filteredProductList);
    // },
    test (state,payload) {
        // alert('test was clicked')
        if(payload.cat !== '' && payload.minValue !== 0 && payload.maxValue !== 0){
            // alert('if is running')
            // console.log(payload)
            state.filteredProductList =state.filterProductList.filter((prd)=> (prd.price >= payload.minValue && prd.price) <= payload.maxValue && prd.category[1] === payload.cat )
            console.log(state.filteredProductList)
        }
        else if (payload.cat && payload.cat !== 'all'){
            alert('else if was running')
            state.filteredProductList = state.filterProductList.filter((prd)=> prd.category[1] === payload.cat)
            console.log(state.filteredProductList)
        }
        else if(payload.cat === 'all'){
            alert('all')
        }
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}