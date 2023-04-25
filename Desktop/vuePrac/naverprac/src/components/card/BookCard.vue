<template>
	<div class="booklist">
		<swiper class="swiper" :options="swiperOption">
			<swiperSlide>
				<p
					class="booklist_list"
					v-for="list in naverBook"
					:key="list.id"
				>
					<img :src="list.img" class="booklist_list_image" />
					<span class="booklist_list_bookname">{{
						list.bookname
					}}</span
					><br />
					<span class="booklist_list_content">{{ list.content }}</span
					><br />
					<span class="booklist_list_author">{{ list.author }}</span>
				</p>
			</swiperSlide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
	</div>
</template>

<script>
import naverData from '../../../db.json';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const naverBook = naverData.posts;

export default {
	components: { swiper, swiperSlide },
	methods: {},
	data() {
		return {
			naverBook,
			swiper,
			swiperSlide,
			swiperOption: {
				slidesPerview: 1,
				spaceBetween: 50,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		};
	},
};
</script>

<style lang="scss">
.swiper {
	// padding-top: ;
	width: 100vw;
	height: 100%;
	float: right;
	text-align: center;
}
.booklist {
	// padding: 200px;
	// background-color: aqua;
	// margin: 20px;
	// width: 900px;
	// height: 850px;
	// overflow: scroll;
	// position: fixed;
	// flex-direction: column;

	img {
		width: 150px;
		height: 200px;
		float: left;
	}
	span {
		padding: 5px;
		// vertical-align: super;
		display: flex;
	}
	&_list {
		float: left;
		white-space: normal;
		// White-space: nowrap;
		&_bookname {
			font-weight: 700;
		}
	}
}
</style>
