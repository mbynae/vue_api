<!-- @format -->

<template>
	<div>
		<HeaderCont />
		<TitleCont name1="about" name2="Reference" />
		<section class="cont__about">
			<article class="about__article">
				<div class="first__left">
					<p>
						창의적인 프론트엔드를 꿈꾸며 리엑트와 뷰를 공부하고 api
						호출 및 출력하는 방법을 배우기 위해 이 사이트를
						제작하였습니다.
					</p>
					<img src="@/assets/img/aboutfirstL.jpg" alt="첫번째L" />
					<h3>프론트엔드 연습 API 블로그입니다.</h3>
				</div>
				<div class="first__right">
					<h3>프론트엔드 연습 API 블로그입니다.</h3>
					<img src="@/assets/img/aboutfirstR.jpg" alt="첫번째R" />
					<p>
						내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
					</p>
				</div>
			</article>
			<article class="about__article">
				<div className="first__left">
					<p>
						내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
					</p>
					<img src="@/assets/img/aboutfirstL.jpg" alt="첫번째L" />
					<h3>타이틀 제목</h3>
				</div>
				<div className="first__right">
					<h3>타이틀 제목</h3>
					<img src="@/assets/img/aboutfirstR.jpg" alt="첫번째R" />
					<p>
						내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
					</p>
				</div>
			</article>
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

export default {
	components: {
		HeaderCont,
		FooterCont,
		TitleCont,
		ContactCont,
	},
};
</script>

<style lang="scss">
.cont__about {
	color: var(--black);
	padding: 0 40px;

	img {
		width: 900px;
		height: 500px;
	}

	h3 {
		font-size: 40px;
		padding: 20px 0;
	}
	p {
		width: 550px;
		padding: 10px 0;
		font-size: 18px;
	}

	.about__article {
		display: flex;
		justify-content: space-between;
		margin-bottom: 250px;

		.first__right {
		}
		.first__left {
			margin-top: 200px;
		}
	}
}
</style>
