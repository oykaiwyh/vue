
const state ={
    count : 1
}
const getters={
    agetters: ( state , getters , rootState , rootGetters) =>{
        console.log('windows',window.Site)
        console.log( state ,' state')
        console.log( getters['aageters'] ,' aagetters')
        console.log( rootState ,' rootState')
        console.log( rootGetters['bstore/bbgeters'] ,' rootGetters')
    },
    aageters:(state)=>{
        return  state.count
    }
}
const mutations = {
    add( state ) {
        state.count++
    },
    remv( state ) {
        state.count--
    }
}

const actions = {
    addaction : ( {commit }) => {
        commit('add')
    },
    remvaction : ( {commit }) => {
        commit('remv')
    }
}

export default ({
        namespaced:true,
        state,
        mutations,
        actions,
        getters
})

// export default new Vuex.Store({
//     state,
//     mutations,
//     actions
// })
