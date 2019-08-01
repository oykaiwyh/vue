<template lang='html'>
    <div>
        page a
     
        vuex count {{$store.state.astore.count}} {{$store.state.bstore.yy}}
        <button @click='addaction(10)'>增加</button>
        <button @click='remvaction'>减少</button>
        <button @click='hanclick'>test</button>
        <v-recently ref='test' ></v-recently>
        {{agetters}}
        {{aageters}}
    </div>
</template>

<script>
    import { mapActions ,mapGetters} from 'vuex'
    import vRecently from './c.vue'
    export default {
        components: {
            vRecently,
        },
        // 单独时
        // methods :mapActions([
        //     'addaction',
        //     'remvaction'
        // ])
        computed:{
            ...mapGetters('astore',["agetters",'aageters'])
        },
        beforeCreate(){
            console.log('dddddddddddddddd')
        },
        destroyed(){
            console.log('aaaaaaaaaaaaaaaaaaa')
        },
        beforeRouteLeave (to, from, next) {
            // this.$refs.test.usetest(to)
          console.log('totototot',to  )
          next()
        },


        methods :{
            ...mapActions('astore',['addaction', 'remvaction']),
            hanclick:function(){
                console.log('hanclick')
                this.$refs.test.usetest(123)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>