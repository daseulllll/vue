<template>
	<div>
		<Header />
		<News />
		<BookCard />
		<Footer />
	</div>
</template>

<script>
import Header from './Header.vue';
import News from './components/card/News.vue';
import BookCard from './components/card/BookCard.vue';
import Footer from './Footer.vue';

export default {
	name: 'App',

	components: {
		Header,
		BookCard,
		Footer,
		News,
	},

	data: () => ({
		//
	}),
};
</script>
