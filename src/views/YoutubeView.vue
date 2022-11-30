<template>
	<div>
		<HeaderCont />
		<TitleCont name1="youtube" name2="reperence api" />
		<section class="cont__refer">
			<div class="container">
				<div class="youtube__popular">
					<div class="container">
						<div class="youtube__inner">
							<h2>Youtube Random</h2>
							<swiper
								:effect="'flip'"
								:grabCursor="true"
								:pagination="true"
								:navigation="true"
								:modules="modules"
								class="mySwiper"
							>
								<swiper-slide
									v-for="random in randoms"
									:key="random.id"
								>
									<li>
										<a
											:href="`https://www.youtube.com/watch?v=${random.id.videoId}`"
										>
											<img
												:src="`${random.snippet.thumbnails.medium.url}`"
												:alt="`${random.snippet.description}`"
											/>
										</a>
									</li>
								</swiper-slide>
							</swiper>
						</div>
					</div>
				</div>
				<div className="unsplash__search">
					<div className="container">
						<h2>검색하기</h2>
						<form @submit.prevent="SearchYoutubes()">
							<input
								type="search"
								id="search"
								placeholder="검색하세요!"
								v-model="search"
							/>
							<button type="submit">검색</button>
						</form>
					</div>
				</div>
				<div className="youtube__btn">
					<div className="container">
						<button
							type="submit"
							v-on:click="SearchYoutubes(title.text)"
							v-for="title in titles"
							v-bind:key="title.text"
						>
							{{ title.text }}
						</button>
					</div>
				</div>
				<div class="youtube__images">
					<ul>
						<li v-for="youtube in youtubes" :key="youtube.id">
							<a
								:href="`https://www.youtube.com/watch?v=${youtube.id.videoId}`"
							>
								<img
									:src="youtube.snippet.thumbnails.medium.url"
									:alt="youtube.snippet.description"
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<ContactCont />
		<FooterCont />
	</div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue';
import TitleCont from '@/components/TitleCont.vue';
import FooterCont from '@/components/FooterCont.vue';
import ContactCont from '@/components/ContactCont.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper';
export default {
	components: {
		HeaderCont,
		TitleCont,
		FooterCont,
		ContactCont,
		Swiper,
		SwiperSlide,
	},
	setup() {
		const randoms = ref([]);
		const youtubes = ref([]);
		const search = ref('sweet cake');
		const SearchYoutubes = e => {
			fetch(
				`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.value}&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&maxResults=30&type=video`,
			)
				.then(response => response.json())
				.then(result => {
					youtubes.value = result.items;
					search.value = '';
					search.value = e;
				})
				.catch(error => console.log('error', error));
		};
		SearchYoutubes();
		const RandomYoutubes = () => {
			fetch(
				'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=최신영화&key=AIzaSyDNb11gN29B9i3IJduoczfIuN39W2env60&maxResults=30&type=video',
			)
				.then(response => response.json())
				.then(result => (randoms.value = result.items))
				.catch(error => console.log('error', error));
		};
		RandomYoutubes();
		return {
			youtubes,
			search,
			randoms,
			SearchYoutubes,
			RandomYoutubes,
			modules: [EffectFlip, Pagination, Navigation],
		};
	},
	data: function () {
		return {
			titles: [
				{ text: 'html' },
				{ text: 'css' },
				{ text: 'javascript' },
				{ text: 'react' },
				{ text: 'vue' },
			],
		};
	},
};
</script>

<style lang="scss">
.youtube__images {
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
.youtube__btn {
	margin: 30px 0 50px;
	button {
		margin-right: 10px;
		padding: 5px 10px;
		margin-bottom: 10px;
		border-radius: 10px;
		background: #000;
		color: #fff;
		cursor: pointer;
		&:hover {
			border: 1px solid #000;
			background: #fff;
			color: #000;
		}
	}
}
.youtube__inner {
	h2 {
		font-size: 40px;
		color: var(--black);
		margin-bottom: 70px;
	}
	.swiper img {
		margin: 100px auto;
	}
	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		font-weight: bold;
		color: #fff;
	}
}
</style>
