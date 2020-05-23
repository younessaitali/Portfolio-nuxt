<template>
	<div
		class="text-color-text bg-color-bg bg-transition flex flex-col h-full justify-between"
		:class="[darkMode?'dark':'light',{ solar: solarMode }]"
	>
		<Navbar
			v-on:darkModeEvent="darkModeHandler"
			v-on:solarModeEvent="solarModeHandler"
			:isDark="darkMode"
			:isSolar="solarMode"
		/>
		<nuxt class="content" />
		<Footer class="footer" />
	</div>
</template>


<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
	components: { Navbar, Footer },
	data() {
		return {
			darkMode: false,
			solarMode: false
		};
	},
	mounted() {
		if (localStorage.isDark) {
			this.darkMode = localStorage.isDark === "true";
		}
		if (localStorage.isSolar) {
			this.solarMode = localStorage.isSolar === "true";
		}
	},
	methods: {
		darkModeHandler() {
			this.darkMode = !this.darkMode;
			localStorage.isDark = this.darkMode;
		},
		solarModeHandler() {
			this.solarMode = !this.solarMode;
			localStorage.isSolar = this.solarMode;
		}
	}
};
</script>

<style>
</style>
