<template>
	<div class="header">
		<dateAndClock />
		<div class="header_right">
			<a
				href="https://help.naver.com/support/welcomePage/guide.help"
				class="_startPage"
			>
				네이버를 시작페이지로</a
			>
			<a href="https://happybean.naver.com/" class="_happyBean"
				><img src="../../assets/naverIcons/HappyBean.png"
			/></a>
			<a href="https://jr.naver.com/" class="_juniorNaver"
				><img src="../../assets/naverIcons/Juniver_logo.webp"
			/></a>
		</div>

		<div class="header_middle">
			<div class="ban">
				<a href="https://www.naver.com/" class="_naver"
					><img src="../../assets/naverIcons/NaverLogo.png"
				/></a>
				<div class="searchBox">
					<input type="text" />
					<button type="button" class="searchIcon">
						<b-icon icon="search"></b-icon>
					</button>
				</div>
			</div>

			<div class="swiper">
				<swiper class="swiper" :options="swiperOption">
					<swiperSlide></swiperSlide>
					<swiperSlide><Weather /></swiperSlide>
					<swiperSlide><AirPollution /></swiperSlide>

					<!-- <div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-prev" slot="button-prev"></div>
					<div class="swiper-button-next" slot="button-next"></div> -->
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
import dateAndClock from '../GNBcompo/headerCompo/dateAndClock.vue';
import Weather from '../GNBcompo/headerCompo/Weather.vue';
import AirPollution from '../GNBcompo/headerCompo/AirPollution.vue';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	components: {
		dateAndClock,
		Weather,
		AirPollution,
		swiper,
		swiperSlide,
	},
	data() {
		return {
			swiperOption: {
				slidesPerview: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: {
					delay: 3000,
					diableOnInteraction: false,
				},
			},
		};
	},
};
</script>

<style lang="scss">


.searchIcon {
	width: 56px;
	height: 55px;
	border: 5px solid #2db400;
	color: #2db400;
}

.header_middle {
	position: relative;
	display: flex;
	vertical-align: middle;
	// float: left;
	margin: 0 auto;
	align-items: center;
	.ban {
		// float: left;
		display: inline-block;
		img {
			// padding: 50px;
			width: 20%;
			height: 5%;
		}
	}

	.searchBox {
		display: flex;
		float: right;
		align-items: center;
		// position: absolute;
		text-align: center;
		// top: 70px;
		padding-left: 30px;
		input {
			width: 550px;
			height: 50px;
			border: 2px solid #2db400;
		}
		button {
			color: white;
			background-color: #2db400;
		}
	}
}

.swiper {
	padding: 50px;
	width: 270px;
	height: 52;
	float: right;
	text-align: center;
}

.header_right {
	text-align: right;
	position: absolute;
	top: 12px;
	right: 27px;
	img {
		float: right;
		width: 70px;
		height: 30px;
	}
}








</style>
