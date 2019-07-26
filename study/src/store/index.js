import Vue  from "vue";
import Vuex from 'vuex'

//引入各部分store
import astore from './model/a.store'
import bstore from './model/b.store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        astore,
        bstore
    },
    state: {

    },
    getters: {

    }
})