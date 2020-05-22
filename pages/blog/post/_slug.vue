<template>
	<div class="pt-2 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
		<div class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<div class="text-center">
				<h2
					class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
				>
					title
					<br class="xl:hidden" />
					<!-- <span class="text-indigo-600">online business</span> -->
				</h2>
				<p
					class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
				>News, Tips and Trick about Development, Productivity</p>
			</div>
		</div>
		<div
			class="mx-auto pb-6 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 border-b-2 border-gray-600"
		>
			<span
				class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
			>FrontEnd</span>
		</div>
		{{slug}}
	</div>
</template>

<script>
export default {
	data() {
		return {
			slug: this.$route.params.slug
		};
	}
};
</script>

<style>
</style>
