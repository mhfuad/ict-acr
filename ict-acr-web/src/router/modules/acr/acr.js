const Layout = () => import("@/views/layouts/DashboardLayout.vue")
const ACR = () => import("@/views/acr-section/index.vue")
const viewMore = () => import("../../../views/acr-section/acr-components/fullListTable.vue");
const from = () => import("../../../views/acr-section/acr-components/form.vue")


const HomeRoute = {
    path: "/acr",
    component: Layout,
    children: [{
        path: "",
        name: "acr",
        component: ACR,
        meta: { requiredAuth: false}
    },
    {
        path: "view-more",
        name: "view-more",
        component: viewMore,
        meta: { requiredAuth: false}
    },
    {
        path: "from",
        name: "from",
        component: from,
        meta: { requiredAuth: false}
    }]
};

export default HomeRoute;
