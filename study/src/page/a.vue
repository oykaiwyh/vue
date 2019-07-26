<template lang='html'>
    <div>
        page a

        vuex count {{$store.state.astore.count}} {{$store.state.bstore.yy}}
        <button @click='addaction(10)'>增加</button>
        <button @click='remvaction'>减少</button>
        {{agetters}}
        {{aageters}}
    </div>
</template>

<script>
    import { mapActions ,mapGetters} from 'vuex'
    export default {
        // 单独时
        // methods :mapActions([
        //     'addaction',
        //     'remvaction'
        // ])
        computed:{
            ...mapGetters('astore',["agetters",'aageters'])
        },

        methods : mapActions('astore',['addaction', 'remvaction'])
        
    }
</script>

<style lang="scss" scoped>

</style>