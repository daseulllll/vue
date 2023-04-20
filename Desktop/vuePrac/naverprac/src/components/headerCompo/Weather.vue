<template>
  <div class="weather">
    <div>{{ cityName }} :::: {{ Math.floor(temp) }} /{{ weather }}</div>
    <div><img :src="iconAddr" /></div>
  </div>
</template>

<script>
// import dotenv from 'dotenv';

const API_key = process.env.VUE_APP_API_KEY ;
// console.log(API_key)
const base_url = "https://api.openweathermap.org/data/2.5/";

export default {
	components: {},
	data() {
		return {
			weather: "",
			iconAddr: Image,
		};
	},
	mounted() {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			let weatherUrl = `${base_url}weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
			console.log(lat, lon);
			
		fetch(weatherUrl)
		.then((response) => response.json())
		.then((results) => {
				// dotenv.config();
          console.log(results);
          let icon = results.weather[0].icon;
          let iconAddr = `http://openweathermap.org/img/wn/${icon}@2x.png`;

          this.temp = results.main.temp;
          this.cityName = results.name;
          this.weather = results.weather[0].main;
          this.iconAddr = iconAddr;
        });
    });
  },
  methods: {},
};
</script>
