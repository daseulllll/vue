<template>
	<div>
		<!-- <swiper class="swiper" :options="swiperOption"> -->
			<!-- <swiperSlide> -->
				<div>
					<span>뉴스 스탠드</span>
				</div>
				<div class="newstable">
					<table>
						<tr v-for="(list, idx) in realNews" :key="idx">
							<td v-for="li in list" :key="li.id">
								<img :src="li.label" @click="linkButton()" />
								<a :href="li.link" target="_blank">
									<b-button size="sm" v-b-popover.hover="'go to news'" :class="{invisible : !showButton}" v-if="isClick">News Link</b-button>
								</a>
							</td>
						</tr>
					</table></div>
			<!-- </swiperSlide> -->
			<!-- <div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div> 
		</swiper>-->
	</div>
</template>

<script>
import db from '../../../db.json';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

const tabledb = db.news;

let bigNews = [];
let realNews = [];

tabledb.map((item, index) => {
	index++;
	if (index % 6 !== 0 && index !== 0) {
		bigNews.push(item);
		// console.log('big------', bigNews);
	} else {
		bigNews.push(item);
		realNews.push(bigNews);
		bigNews = [];
		// console.log('=========small======', realNews);
	}
});

export default {
	methods:{
		linkButton(){
			this.isClick = !this.isClick;
		}
	},
	// components: { swiper, swiperSlide },
	data() {
		return {
			showButton:true,
			isClick:false,
			tabledb,
			realNews,
			swiper,
			swiperSlide,
			swiperOption: {
				slidesPerView: 1,
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

<style lang="scss" scoped>
.invisible {
  visibility: hidden;
}

.swiper {
	// padding: 50px;
	width: 100%;
	height: 100%;
	float: left;
	text-align: center;
}

.newstable {
	position: relative;
	// float: left;
	// padding: 100px;
	display: flex;
	width: 100vw;
	// width: 100px;
	// height: 325px;
	line-height: 100px;
    align-items: center;

	table {
		text-align: center;
		border-collapse: collapse;
		// background-color: red;
		width: 100%;
		border: 1px solid #c8c8c8;
		text-align: center;
	}
	tr,
	td {
		border-right: 1px solid;
		border-bottom: 1px solid #c8c8c8;
	}
	// img {
	// padding-left: 100%;
	// }
}
</style>
