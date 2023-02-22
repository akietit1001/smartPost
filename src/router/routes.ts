import HomeView from '@/views/HomeView.vue';
import Admin from '@/views/Admin.vue';

export const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/admin',
        component: Admin 
    }
]