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
.cont__unsplash {
	ul {
		column-count: 4;
		column-gap: 20px;
		width: 100%;

		li {
			margin-bottom: 20px;

			img {
				border-radius: 5px;
			}
		}
	}
}

.unsplash__random {
	margin-bottom: 60px;

	h2 {
		margin-bottom: 20px;
		text-align: center;
		font-size: 50px;
		color: var(--white);
	}
}

// .random__inner {

//     h2 {
//         font-size: 50px;
//         text-align: center;
//         margin-bottom: 30px;
//         color: var(--white);
//     }

//     li {
//         width: 19%;

//         a {

//             img {
//                 display: inline-block;
//                 width: 100%;
//             }
//         }
//     }
// }

.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: black;

	/* Center slide text vertically */
	display: flex;
	justify-content: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
	background: black;
}

.swiper-slide {
	background: black;
	width: 40% !important;

	img {
		vertical-align: top;
		border-radius: 10px;
		background: black;
		background-position: center;
		min-width: 500px;
		min-height: 500px;
		max-height: 500px;
	}
}
</style>
