import HomeView from '@/views/HomeView.vue';
import Admin from '@/views/Admin.vue';
import AdminProfile from '@/views/AdminProfile.vue';

export const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/admin',
        component: Admin 
    },
    {
        path: '/admin/2',
        component: AdminProfile
    }
]