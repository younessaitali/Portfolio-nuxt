<template>
	<div class="pt-2 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
		<div class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<div class="text-center">
				<h1
					v-if="error.statusCode === 404"
					class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
				>
					404 Page not found
					<br />
					<span class="text-color-secondary_text mt-10 text-xl">
						<nuxt-link to="/">Home page</nuxt-link>
					</span>
				</h1>
				<h1
					v-else
					class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
				>
					An error occurred
					<br />
					<span class="text-color-secondary_text mt-10 text-xl">
						<nuxt-link to="/">Home page</nuxt-link>
					</span>
				</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["error"],
	layout: "blog" // you can set a custom layout for the error page
};
</script>
