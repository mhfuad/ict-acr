const Layout = () => import("@/views/layouts/DashboardLayout.vue")
const Home = () => import("@/views/HomeView.vue")

const HomeRoute = {
    path: "/home",
    component: Layout,
    children: [{
        path: "",
        name: "Home",
        component: Home,
        meta: { requiredAuth: false}
    }]
};

export default HomeRoute;
