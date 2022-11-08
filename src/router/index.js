import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import AboutView from '../views/AboutView.vue';
import ReferView from '../views/ReferView.vue';
import YoutubeView from '../views/YoutubeView.vue';
import MovieView from '../views/MovieView.vue';
import UnsplashView from '../views/UnsplashView.vue';

const routes = [
	{
		path: '/',
		name: 'main',
		component: MainView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/reference',
		name: 'reference',
		component: ReferView,
	},
	{
		path: '/youtube',
		name: 'Youtube',
		component: YoutubeView,
	},
	{
		path: '/movie',
		name: 'Movie',
		component: MovieView,
	},
	{
		path: '/unsplash',
		name: 'Unsplash',
		component: UnsplashView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
