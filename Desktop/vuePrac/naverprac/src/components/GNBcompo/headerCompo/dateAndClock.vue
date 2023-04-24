<template>
	<div>
		<div class="clock">{{ curTime }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			curTime: '',
		};
	},
	mounted() {
		this.getTimes();
		setInterval(this.currentTimes, 1000);
	},
	methods: {
		getTimes() {
			let today = new Date();

			let year = today.getFullYear();
			let month = today.getMonth() + 1;
			let date = today.getDate();

			let hour = String(today.getHours()).padStart(2, '0');
			let min = String(today.getMinutes()).padStart(2, '0');
			let sec = String(today.getSeconds()).padStart(2, '0');

			return {
				year: year,
				month: month,
				date: date,
				hour: hour,
				min: min,
				sec: sec,
			};
		},
		currentTimes() {
			this.curTime =
				this.getTimes().year +
				'년' +
				this.getTimes().month +
				'월' +
				this.getTimes().date +
				'일' +
				this.getTimes().hour +
				'hr' +
				this.getTimes().min +
				'm' +
				this.getTimes().sec +
				's';
		},
	},
};
</script>

<style></style>
