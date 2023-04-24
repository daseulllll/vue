<template>
	<div class="pollution">
		<div :title="index">
			<div v-if="index == 1">
				미세먼지 없어~공기 조하
				<img src="../../../assets/airpollutionIcons/1.png" />
			</div>
			<div v-else-if="index == 2">
				미세먼지 죄끔있으요
				<img src="../../../assets/airpollutionIcons/2.png" />
			</div>
			<div v-else-if="index == 3">
				미세먼지 보통쓰
				<img src="../../../assets/airpollutionIcons/3.png" />
			</div>
			<div v-else-if="index == 4">
				미세먼지 나빠
				<img src="../../../assets/airpollutionIcons/4.png" />
			</div>
		</div>
	</div>
</template>

<script>
const API_key = process.env.VUE_APP_API_KEY;
// const API_key = "";
const base_url = 'https://api.openweathermap.org/data/2.5/';

export default {
	components: {},
	data() {
		return {
			index: '',
		};
	},
	mounted() {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			let airPollutionUrl = `${base_url}air_pollution?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
			// console.log(lat, lon);

			fetch(airPollutionUrl)
				.then((response) => response.json())
				.then((results) => {
					// console.log(results);
					this.index = results.list[0].main.aqi;
				});
		});
	},
	methods: {},
};
</script>

<style lang="scss">
.pollution {
	img {
		width: 85px;
	}
}
</style>
