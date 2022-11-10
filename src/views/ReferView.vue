<template>
	<div>
		<HeaderCont />
		<TitleCont name1="reference" name2="api" />
		<section class="cont__refer">
			<div class="container">
				<div class="refer__inner">
					<h2>CSS</h2>
					<ul class="refer__list">
						<li v-for="refer in refers" :key="refer.title">
							<a href="/">
								<!-- <span>{{ refer.num }}</span> -->
								<span>{{ refer.title }}</span>
								<span>{{ refer.desc }}</span>
								<span>{{ refer.star }}</span>
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
		const refers = ref([]); //이렇게 쓰면 자동으로 변수값이 변하면 그에 맞춰 저장됨
		const references = () => {
			fetch(
				'https://webstoryboy.github.io/react2022/src/assets/json/refer.json',
				// 'https://mbynae.github.io/react_api/src/utils/reference.json',
			)
				.then(response => response.json())
				// .then(result => console.log(result))
				// .then(result => console.log(result.data.htmlRefer))
				.then(result => (refers.value = result.data.htmlRefer))
				.catch(error => console.log('error', error));
		};
		references();

		return {
			refers,
			references,
		};
	},
};
</script>

<style lang="scss">
.refer__inner {
	padding-bottom: 200px;

	h2 {
		font-size: 30px;
		color: var(--black);
	}
}
.refer__list {
	border: 1px solid var(--bg-dark-border);
	font-family: var(--font-sub3);
	font-weight: 300;

	li {
		border-bottom: 1px solid var(--bg-dark-border);

		a {
			display: flex;
			align-items: center;
			width: 100%;
			color: var(--black);

			span {
				display: inline-block;
				padding: 15px 20px;
			}

			.num {
				flex: 1 1 5%;
				text-align: center;
				border-right: 1px solid var(--bg-dark-border);
			}
			.name {
				flex: 1 1 20%;
				border-right: 1px solid var(--bg-dark-border);
			}
			.desc {
				flex: 1 1 60%;
				border-right: 1px solid var(--bg-dark-border);
			}
			.star {
				flex: 1 1 15%;
				text-align: center;
			}
		}
	}
}
</style>
