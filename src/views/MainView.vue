<template>
	<div>
		<HeaderCont />
		<section class="main__cont">
			<div class="main__inner">
				<!-- <div>we provide</div>
				<div>visual coding</div>
				<div>solution</div>
				<div>for you api</div> -->
				<div v-for="title in titles" v-bind:key="title.text">
					{{ title.text }}
				</div>
				<!--뷰의 반복문 쓰는법-->
			</div>
		</section>
		<FooterCont />
	</div>
</template>

<script>
import HeaderCont from '@/components/HeaderCont.vue';
import FooterCont from '@/components/FooterCont.vue';

export default {
	components: {
		HeaderCont,
		FooterCont,
	},

	//리엑트에선 함수를 이렇게 씀
	data: function () {
		return {
			titles: [
				{ text: 'we provide' },
				{ text: 'visual coding' },
				{ text: 'solution' },
				{ text: 'for you api' },
			],
		};
	},
};
</script>

<style lang="scss">
.main__inner {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 100vh;
	color: var(--black);
	> div {
		font-size: 9.4vw;
		line-height: 0.9;
		text-transform: uppercase;
	}
}
</style>
