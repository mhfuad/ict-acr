const Layout = () => import("@/views/layouts/AuthLayout.vue")
const Login = () => import("@/views/Login.vue")

const loginRoute = {
    path: "/login",
    component: Layout,
    children: [{
        path: "",
        name: "Login",
        component: Login,
        meta: { requiredAuth: false}
    }]
};

export default loginRoute;
