import Vue from 'vue'
import Router from 'vue-router'
import StockContainer from '@/components/StockContainer.vue'
import OrderContainer from '@/components/OrderContainer.vue'
import DyeContainer from '@/components/DyeContainer.vue'
import SaleContainer from '@/components/SaleContainer.vue'
import ManageContainer from '@/components/ManageContainer.vue'
import ManageSuppliers from '@/components/manage/Suppliers.vue'
import DyeFactories from '@/components/manage/DyeFactories.vue'
import Customers from '@/components/manage/Customers.vue'



Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        { path: '/stock', component: StockContainer },
        { path: '/order', component: OrderContainer },
        { path: '/dye', component: DyeContainer },
        { path: '/sale', component: SaleContainer },
        {
            path: '/manage', component: ManageContainer, children: [
                { path: 'suppliers', component: ManageSuppliers },
                { path: 'dye-factories', component: DyeFactories },
                { path: 'customers', component: Customers },
            ]
        },
    ]
})