<template>
	<div>
		<HeaderCont />
		<TitleCont name1="Unsplash" name2="API" />
		<section class="cont__ubsplash">
			<div class="container">
				<div class="unshpash__inner">
					<h2>Unsplash Photos</h2>
					<div class="unsplash__slider"></div>
					<div class="unsplash__search"></div>
					<div class="unsplash__images">
						<ul>
							<li v-for="splash in splashes" :key="splash.id">
								<a href="#">
									<img
										:src="splash.urls.regular"
										alt="splash.id"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<ContactCont />
		<FooterCont />
	</div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue';
import FooterCont from '@/components/FooterCont.vue';
import TitleCont from '@/components/TitleCont.vue';
import ContactCont from '@/components/ContactCont.vue';
import { ref } from 'vue';

export default {
	components: {
		HeaderCont,
		FooterCont,
		TitleCont,
		ContactCont,
	},

	setup() {
		const splashes = ref([]);
		const search = ref('landscape');

		// const SearchSplashes = () => {
		// 	fetch(
		// 		`https://api.unsplash.com/search/photos?client_id=GFU0S66m9fkwgOoQ6SxTubYmsJazE-k1yygT2XVI-Uw&query=${query}`,
		// 	)
		// 		.then(response => response.json())
		// 		.then(result => console.log(result))
		// 		.then(error => console.log(error));
		// };
		// SearchSplashes();
		const RandomSplashes = () => {
			fetch(
				'https://api.unsplash.com/photos/random?client_id=GFU0S66m9fkwgOoQ6SxTubYmsJazE-k1yygT2XVI-Uw&count=20',
			)
				.then(response => response.json())
				.then(result => (splashes.value = result))
				.then(error => console.log('error', error));
		};
		RandomSplashes();

		return {
			splashes,
			search,
			// SearchSplashes,
			RandomSplashes,
		};
	},
};
</script>

<style lang="scss">
.unshpash__inner {
	width: 100%;
	height: 1000px;
	background-color: #f5f5f5;
}
.unshpash__inner h2 {
	font-size: 60px;
	text-align: center;
}
</style>
