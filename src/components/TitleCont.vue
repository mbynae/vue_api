<template>
	<section class="cont__title">
		<div class="container">
			<h1>
				<strong>{props.title[0]}</strong>
				<em>{props.title[1]}</em>
			</h1>
		</div>
	</section>
</template>

<style lang="scss">
.main__inner {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	height: 100vh;
	color: var(--black);

	> div {
		font-size: 8.5vw;
		line-height: 0.9;
		text-transform: uppercase;
	}
}
</style>
