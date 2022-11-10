<template>
	<div>
		<HeaderCont />
		<TitleCont name1="movie" name2="reference api" />
		<section class="cont__refer">
			<div class="container">
				<div class="movie__inner">
					<div class="movie__slider">
						<div className="movie__PopularBox">
							<div className="container">
								<h2>Today Most Popular Movie👍</h2>
								<swiper
									:initialSlide="1"
									:effect="'coverflow'"
									:grabCursor="true"
									:centeredSlides="true"
									:slidesPerView="'auto'"
									:autoplay="{
										delay: 2500,
										disableOnInteraction: false,
									}"
									:coverflowEffect="{
										rotate: 50,
										stretch: 0,
										depth: 100,
										modifier: 1,
										slideShadows: true,
									}"
									:pagination="true"
									:modules="modules"
									class="mySwiper"
								>
									<swiper-slide
										v-for="slider in sliders"
										:key="slider.id"
										><a
											:href="`https://www.themoviedb.org/movie/${slider.id}`"
										>
											<img
												class="slide_img"
												:src="`https://image.tmdb.org/t/p/original/${slider.poster_path}`"
												:alt="slider.title"
											/>
										</a>
									</swiper-slide>
								</swiper>
							</div>
						</div>
					</div>
					<div class="movie__search">
						<div class="container">
							<form @submit.prevent="SearchMovies()">
								<input
									type="search"
									id="search"
									placeholder="검색하세요"
									v-model="search"
								/>
								<button type="submit">검색</button>
							</form>
						</div>
					</div>
					<div class="movie__movies">
						<div class="container">
							<div class="movie__list">
								<ul>
									<li v-for="movie in movies" :key="movie.id">
										<a
											:href="`https://www.themoviedb.org/movie/${movie.id}`"
										>
											<img
												:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
												:alt="movie.title"
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- //movie__movies -->
				</div>
			</div>
		</section>
		<FooterCont />
		<ContactCont />
	</div>
</template>
<script>
import HeaderCont from '@/components/HeaderCont.vue';
import FooterCont from '@/components/FooterCont.vue';
import TitleCont from '@/components/TitleCont.vue';
import ContactCont from '@/components/ContactCont.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

export default {
	components: {
		HeaderCont,
		FooterCont,
		TitleCont,
		ContactCont,
		Swiper,
		SwiperSlide,
	},
	setup() {
		const movies = ref([]);
		const sliders = ref([]);
		const search = ref('marvel');
		const SearchMovies = async () => {
			//비동기 싱크로 데이터가 늦게 불러와질때 레이아웃이 꺠지는걸 방지하기 위해 async랑 await를 넣어줌
			await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&language=ko-KO&query=${search.value}&page=1&include_adult=false&region=KR`,
			)
				.then(response => response.json())
				.then(result => {
					console.log(result);
					movies.value = result.results;
					search.value = '';
				})
				.catch(error => console.log(error));
		};
		SearchMovies();
		const TopMovies = async () => {
			await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=a3c2b7c652a8a847c713f7040bb7cc1d&language=ko-KO&page=1&region=KR`,
			)
				.then(response => response.json())
				.then(result => (sliders.value = result.results))
				.catch(error => console.log(error));
		};
		TopMovies();

		return {
			movies,
			sliders,
			search,
			SearchMovies,
			TopMovies,
			modules: [Autoplay, EffectCoverflow, Pagination],
		};
	},
};

// function sliderTop() {
// 	const sliderImg = document.querySelectorAll('.slide_img');
// }
// sliderTop();
</script>

<style lang="scss">
.movie__list {
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		li {
			width: 19%;
			margin-bottom: 2%;
		}
	}
}

.movie__slider {
	width: 100%;
}

.movie__PopularBox {
	margin-bottom: 150px;

	.container {
		h2 {
			font-size: 40px;
			text-align: center;
			color: var(--black);
			margin-bottom: 40px;
			font-family: var(--font-sub2);
			font-weight: 700;
		}

		.popular__inner {
			width: 100%;
			overflow-y: hidden;
			overflow-x: scroll;
			scroll-behavior: smooth;

			.popular__view {
				width: 6300px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				flex-wrap: wrap;

				li {
					width: 3%;
					margin-right: 32px;
					position: relative;
					transition: all 0.3s;

					a {
						img {
							width: 276px;
							height: 400px;
							margin-bottom: 10px;
						}

						span {
							font-size: 16px;
							color: var(--white);
						}
					}

					&::before {
						content: '';
						width: 60px;
						height: 60px;
						font-size: 25px;
						color: #fff;
						font-weight: 800;
						position: absolute;
						left: 10px;
						top: 30px;
						z-index: 10000;
						font-family: var(--font-sub2);
					}
					&:nth-child(1)::before {
						content: 'TOP 1';
					}
					&:nth-child(2)::before {
						content: 'TOP 2';
					}
					&:nth-child(3)::before {
						content: 'TOP 3';
					}
					&:nth-child(4)::before {
						content: 'TOP 4';
					}

					&:hover {
						transform: scale(1.05);
					}
				}
			}
		}
		.popular__inner::-webkit-scrollbar {
			opacity: 0;
			width: 5px;
			height: 5px;
		}
		.popular__inner::-webkit-scrollbar-thumb {
			border-radius: 50px;
			background: #dbdbdb;
		}
		.popular__inner::-webkit-scrollbar-track {
		}
	}
}

.movie__search {
	margin-bottom: 100px;

	.container {
		position: relative;
	}

	h2 {
		color: var(--black);
		font-size: 40px;
		text-indent: -9999px;
		height: 0;
	}

	input {
		background: #f5f5f5;
		border: 2px solid var(--black);
		border-radius: 50px;
		font-size: 20px;
		color: #000;
		width: 100%;
		padding: 14px 30px;
		font-family: var(--font-sub1);
	}
	button {
		position: absolute;
		right: 6px;
		top: 10px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 0;
		font-family: var(--font-sub1);
		font-weight: 700;
		cursor: pointer;
		z-index: 1000;
	}
}

.swiper {
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
}

.swiper-slide {
	background-position: center;
	background-size: cover;
	width: 400px;
}

.swiper-slide img {
	display: block;
	width: 100%;
}
</style>
