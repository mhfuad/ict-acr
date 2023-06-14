const Layout = () => import("@/views/layouts/DashboardLayout.vue")
const Home = () => import("@/views/dashboard-section/index.vue")

const HomeRoute = {
    path: "/",
    component: Layout,
    children: [{
        path: "",
        name: "Home",
        component: Home,
        meta: { requiredAuth: false}
    }]
};

export default HomeRoute;
