import Vue from 'vue'
import Router from 'vue-router'
import StockContainer from '@/components/StockContainer.vue'
import PurchaseContainer from '@/components/PurchaseContainer.vue'
import DyeContainer from '@/components/DyeContainer.vue'
import SaleContainer from '@/components/SaleContainer.vue'
import ManageContainer from '@/components/ManageContainer.vue'


Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        { path: '/stock', component: StockContainer },
        { path: '/purchase', component: PurchaseContainer },
        { path: '/dye', component: DyeContainer },
        { path: '/sale', component: SaleContainer },
        { path: '/manage', component: ManageContainer },
    ]
})