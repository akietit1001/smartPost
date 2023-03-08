import HomeView from '@/views/HomeView.vue';

export const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/login',
        component: () => import('@/Layout/LoginLayout.vue'),
        children:[
            {
                path: '/login',
                component: () => import('@/components/Form.vue'),
                children: [
                    {
                        path: '/login/',
                        component: () => import('@/components/FormLogin.vue')
                    },
                    {
                        path: '/login/invite',
                        component: () => import('@/components/FormLoginInvite.vue')
                    },
                ]
            },
            {
                path: '/login/conditions',
                component: () => import('@/components/FormConditions.vue'),
                children: [
                    {
                        path: '/login/conditions',
                        component: () => import('@/components/Conditions.vue')
                    }
                ]
            },
        ]
    },
    {
        path: '/admin',
        component: () => import('@/Layout/AdminLayout.vue'),
        children: [
            {
                path: `/admin/1`,
                component: () => import('@/views/Admin.vue'),
                children: [
                    {
                        path: 'admin/1/1',
                        component: () => import ('@/views/AdminProfile.vue')
                    }
                ]
            },
            {
                path: '/admin/2',
                component: () => import ('@/views/AdminProfile.vue')
            },
            {
                path: '/admin/invite',
                component: () => import('@/views/AdminInvite.vue')
            }
        ]
    },
]