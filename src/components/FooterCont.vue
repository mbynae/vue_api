<template>
	<footer id="footer">
		<div class="footer__inner">
			<div>
				<h3>email</h3>
				<!-- 여기는 페이지 이동이 아니기 때문에 링크를 서도됨 -->
				<a href="mailto:piowm123@gmail.com">piowm123@gmail.com</a>
			</div>
			<div>
				<h3>kakao</h3>
				<a href="/">piowm123</a>
			</div>
			<div>
				<h3>social</h3>
				<ul>
					<li>
						<a href="/">youtube</a>
					</li>
					<li>
						<a href="/">instargram</a>
					</li>
					<li>
						<a href="/">github</a>
					</li>
					<li>
						<a href="/">blog</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
#footer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	color: var(--black);
	border-top: 1px solid var(--bg-light-border);
	background-color: var(--bg-light);
	z-index: 1000;
}

.footer__inner {
	display: flex;
	align-items: center;
	font-family: var(--font-sub2);

	div {
		text-align: center;

		&:nth-child(1) {
			flex: 1 1 30%;
			border-right: 1px solid var(--bg-light-border);
		}
		&:nth-child(2) {
			flex: 1 1 30%;
			border-right: 1px solid var(--bg-light-border);
		}
		&:nth-child(3) {
			flex: 1 1 40%;
		}
	}
	h3 {
		padding: 20px;
	}
	h3,
	ul,
	li {
		display: inline-block;
	}
	a {
		display: inline-block;
		margin: 23px;
		color: var(--black);
		opacity: 0.6;
		position: relative;
		transition: opacity 0.3s;
		text-transform: capitalize;

		&:hover {
			opacity: 1;
		}

		&::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1px;
			transform: scaleX(0);
			background: var(--light);
			transition: all 0.3s ease;
		}
		&:hover::before {
			transform: scaleX(1);
		}
	}
}
</style>
