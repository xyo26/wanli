import Vue from 'vue'
import Router from 'vue-router'
import StockContainer from '@/components/StockContainer.vue'
import PurchaseContainer from '@/components/PurchaseContainer.vue'

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        { path: '/stock', component: StockContainer },
        { path: '/purchase', component: PurchaseContainer }
    ]
})