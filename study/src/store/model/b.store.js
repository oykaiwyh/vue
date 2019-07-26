

const state ={
    yy : 1
}
const getters={
    bgetters: ( state , getters , rootState , rootGetters) =>{
        console.log( state ,' state')
        console.log( getters ,' getters')
        console.log( rootState ,' rootState')
        console.log( rootGetters ,' rootGetters')
    },
    bbgeters:(state)=>{
        return  state.yy
    }
}
const mutations = {
    add( state,param ) {
        state.yy += param
    },
    remv( state ) {
        state.yy=state.yy-2
    }
}

const actions = {
    addaction : ( {commit },params) => {
        commit('add',params)
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