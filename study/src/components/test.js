import Vue from 'vue';

Vue.directive('test',{
    bind:(el,binding)=>{
        el.textContent=Math.pow(binding.value,2)
    },
    update:(el,binding)=>{
        el.textContent=Math.pow(binding.value,3)
    }

})