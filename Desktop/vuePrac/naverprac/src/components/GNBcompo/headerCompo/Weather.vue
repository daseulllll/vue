<template>
	<div class="weather">
		<div>{{ cityName }} :::: {{ Math.floor(temp) }} /{{ weather }}</div>
		<div><img :src="iconAddr" /></div>
	</div>
</template>

<script>
const API_key = process.env.VUE_APP_API_KEY;
// const API_key = '';
// console.log(':::::::::::::::::::::', API_key);
const base_url = 'https://api.openweathermap.org/data/2.5/';

export default {
	components: {},
	data() {
		return {
			weather: '',
			iconAddr: '',
			cityName: '',
			temp: '',
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function () {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				let weatherUrl = `${base_url}weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
				// console.log(lat, lon);
				// console.log(':::::::::::::::::::::', API_key);

				fetch(weatherUrl)
					.then((response) => response.json())
					.then((results) => {
						// console.log(results);
						let icon = results.weather[0].icon;
						let iconAddr = `https://openweathermap.org/img/wn/${icon}@2x.png`;

						this.temp = results.main.temp;
						this.cityName = results.name;
						this.weather = results.weather[0].main;
						this.iconAddr = iconAddr;
					});
			});
		},
	},
};
</script>
