<template>
	<div>
		<div class="header_right">
			<a
				href="https://help.naver.com/support/welcomePage/guide.help"
				class="_startPage"
			>
				네이버를 시작페이지로</a
			>
			<a href="https://happybean.naver.com/" class="_happyBean"
				><img src="../src/assets/naverIcons/HappyBean.png"
			/></a>
			<a href="https://jr.naver.com/" class="_juniorNaver"
				><img src="../src/assets/naverIcons/Juniver_logo.webp"
			/></a>
		</div>
		<div class="ban">
			<a href="https://www.naver.com/" class="_naver"
				><img src="../src/assets/naverIcons/NaverLogo.png"
			/></a>
		</div>
        <div>
            <dateAndClock/>
            <Weather/>
			<AirPollution/>
        </div>
	</div>
</template>

<script>
import dateAndClock from './components/headerCompo/dateAndClock.vue';
import Weather from './components/headerCompo/Weather.vue';
import AirPollution from './components/headerCompo/AirPollution.vue';

export default{
    components:{
        dateAndClock,
        Weather,
		AirPollution
    }
}
</script>

<style lang="scss" scoped>
.header_right {
	img {
		float: right;
		width: 70px;
		height: 30px;
	}
}

.ban {
	img {
		padding: 50px;
		width: 20%;
		height: 5%;
	}
}
</style>
