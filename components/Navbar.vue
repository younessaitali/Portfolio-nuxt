<template>
	<div class="relative pt-6 pb-8 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28">
		<div class="max-w-screen-xl mx-auto px-4 sm:px-6">
			<nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
				<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
					<div class="flex items-center justify-between w-full md:w-auto">
						<div class="-mr-2 flex items-center md:hidden">
							<button
								@click="open = true"
								type="button"
								class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
							>
								<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<nuxt-link to="/">
						<span
							class="font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
						>Home</span>
					</nuxt-link>
					<nuxt-link to="/#about">
						<span
							class="ml-10 font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
						>About</span>
					</nuxt-link>
					<nuxt-link to="/#project">
						<span
							class="ml-10 font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
						>Project</span>
					</nuxt-link>
					<nuxt-link to="/blog">
						<span
							class="ml-10 font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
						>Blog</span>
					</nuxt-link>
					<a
						@click="darkModeHandler"
						href="#"
						class="ml-10 font-medium text-color-text focus:outline-none transition duration-150 ease-in-out"
					>
						<svg v-if="isDark" fill="currentColor" class="inline h-6 w-6" viewBox="0 0 20 20">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
						<svg v-else fill="currentColor" class="inline h-6 w-6" viewBox="0 0 20 20">
							<path
								d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
							/>
						</svg>
					</a>
					<a
						@click="solarModeHandler"
						href="#"
						class="ml-10 font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
					>
						<svg class="inline h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clip-rule="evenodd"
								fill-rule="evenodd"
							/>
						</svg>
						<span class="ml-1">{{isSolar?"solarize":"normalize"}}</span>
					</a>
				</div>
			</nav>
		</div>

		<div v-show="open" style="display: none;" class="absolute top-0 inset-x-0 p-2 md:hidden">
			<transition
				enter-active-class="duration-150 transition-all  ease-out"
				leave-active-class="duration-150 transition-all ease-in"
				enter-class="opacity-0 scale-95"
				enter-to-class="opacity-100 scale-100"
				leave-class="opacity-100 scale-100"
				leave-to-class="opacity-0 scale-95"
			>
				<div class="rounded-lg shadow-md transition transform origin-top-right" v-show="open">
					<div class="rounded-lg bg-color-bg shadow-xs overflow-hidden">
						<div class="px-5 pt-4 flex items-center justify-between">
							<div class="-mr-2">
								<button
									@click="open = false"
									type="button"
									class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
								>
									<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="px-2 pt-2 pb-3">
							<nuxt-link to="/'">
								<span
									class="block px-3 py-2 rounded-md text-base font-medium text-color-text hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
								>Home</span>
							</nuxt-link>
							<nuxt-link to="/#about">
								<span
									href="#project"
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-color-text hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
								>About</span>
							</nuxt-link>
							<nuxt-link to="/#project">
								<span
									href="#project"
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-color-text hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
								>Project</span>
							</nuxt-link>
							<nuxt-link to="/blog">
								<span
									class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-color-text hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
								>Blog</span>
							</nuxt-link>
							<a
								@click="darkModeHandler"
								class="ml-1 mt-4 flex font-medium text-color-text transition duration-150 ease-in-out"
							>
								<svg v-if="isDark" fill="currentColor" class="ml-2 h-6 w-6" viewBox="0 0 20 20">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
								<svg v-else fill="currentColor" class="ml-2 h-6 w-6" viewBox="0 0 20 20">
									<path
										d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
									/>
								</svg>
							</a>
							<a
								@click="solarModeHandler"
								class="ml-1 mt-4 flex font-medium text-color-text hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
							>
								<svg class="ml-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
										clip-rule="evenodd"
										fill-rule="evenodd"
									/>
								</svg>
								<span class="ml-1">{{isSolar?"solarize":"normalize"}}</span>
							</a>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	props: {
		isDark: {
			type: Boolean,
			required: true
		},
		isSolar: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			open: false
		};
	},
	methods: {
		darkModeHandler() {
			this.$emit("darkModeEvent");
		},
		solarModeHandler() {
			this.$emit("solarModeEvent");
		}
	}
};
</script>

<style>
</style>
