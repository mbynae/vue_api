<template>
	<section class="cont__title">
		<div class="container">
			<h1>
				<strong>{{ name1 }}</strong>
				<em>{{ name2 }}</em>
			</h1>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		name1: String,
		name2: String,
	},
};
</script>

<style lang="scss">
body {
	background: var(--bg-light);
}

.container {
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	// background: rgba(255, 255, 255, 0.3);
}

// cont__title
.cont__title {
	padding: 14vmax 0;
	font-size: 80px;
	font-family: var(--font-main);
	color: var(--black);
	line-height: 1;
	text-transform: uppercase;

	strong {
		display: block;
	}
}

// cont__contact
.cont__contact {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: var(--white);
	text-transform: uppercase;

	p {
		font-size: 20px;
		font-family: var(--font-sub2);
		margin-bottom: 20px;
	}
	h3 {
		font-size: 10vw;
		font-family: var(--font-main);
		line-height: 1;
		text-align: center;

		em {
			display: block;
		}
	}

	a {
		font-size: 16px;
		font-family: var(--font-sub2);
		border: 1px solid var(--white);
		border-radius: 50px;
		padding: 1vw;
		color: var(--white);
	}
}
</style>
