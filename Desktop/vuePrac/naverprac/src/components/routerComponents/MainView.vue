<template>
	<div>
		<div>
			<div class="contents">
				<div class="news"><News /></div>
				<div class="book"><Book /></div>
			</div>
		</div>
	</div>
</template>

<script>
import Book from '../card/BookCard.vue';
import News from '../card/News.vue';

export default {
	name: 'Main',
	components: {
		Book,
		News,
	},
};
</script>

<style lang="scss" scoped>
//1519.200 x4354.800

.contents {
	.news {
		background-color: aqua;
		// position: relative;
		// float: left;
		// padding: 100px;
		display: flex;
		// width: 100vw;

		// width: 747px;
		// height: 450px;

		// width: 100%;
		// width: 1500px;
		// height: 100%;
		// height: 325px;
		line-height: 100px;
		margin: 0 auto;

		clear: both;
		min-height: 100%;
		// padding-bottom: 1219px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		// margin-top: 60px;
	}
	.book {
		display: flex;
    // padding-top: 30%;
		background-color: aquamarine;
		clear: both;
		// position: relative;
		// min-height: 100%;
		// padding-bottom: 1219px;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		// margin-top: 60px;
	}
}
</style>
