import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import ContactUs from '../components/ContactUs.vue'
import HomePage from '../components/HomePage.vue'
import CallADoctor from '../components/CallADoctor.vue'
import BlogRefs from '../components/BlogRefs.vue'
import BMICalculator from '../components/BMICalculator.vue'
import AboutUs from '../components/AboutUs.vue'
import ProfilePage from '../components/ProfilePage.vue'
import DietPlans from '../components/DietPlans.vue'
import ExerciseReport from '../components/ExerciseReport.vue'
import Exercise from '../components/Exercise.vue'
import Vegetarian from '../components/Vegetarian.vue'
import Vegan from '../components/Vegan.vue'
import Detox from '../components/Detox.vue'
import MuscleGain from '../components/MuscleGain.vue'
import WeightLoss from '../components/WeightLoss.vue'
import WeightGain from '../components/WeightGain.vue'


Vue.use(VueRouter)

const routes = [{
        path: '*',
        redirect: '/',
    },
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn,
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs
    },
    {
        path: '/calladoctor',
        name: 'calladoctor',
        component: CallADoctor
    },
    
    {
        path: '/blogrefs',
        name: 'blogrefs',
        component: BlogRefs,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/exercise',
        name: 'exercise',
        component: Exercise,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/dietplans',
        name: 'dietplans',
        component: DietPlans,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/vegetarian',
        name: 'vegetarian',
        component: Vegetarian,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/vegan',
        name: 'vegan',
        component: Vegan,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/detox',
        name: 'detox',
        component: Detox,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/muscle-gain',
        name: 'muscle-gain',
        component: MuscleGain,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/weight-loss',
        name: 'weight-loss',
        component: WeightLoss,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/weight-gain',
        name: 'weight-gain',
        component: WeightGain,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: '/exercisereport',
        name: 'exercisereport',
        component: ExerciseReport,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/bmicalculator',
        name: 'bmicalculator',
        component: BMICalculator
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs
    },
    {
        path: '/profilepage',
        name: 'profilepage',
        component: ProfilePage,
        meta: {
            requiresAuth: true
        }
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NO logged user
        if (!firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/signin',
                query: {
                    redirect: from.name
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if NO logged user
        if (firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else {
        // Proceed to route
        next();
    }
});

export default router;