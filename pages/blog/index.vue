<template>
	<main class="bg-nav">
		<div class="pt-2 bg-color-bg pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
			<div class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
				<div class="text-center">
					<h2
						class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
					>
						Blog
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
				>
					<button @click="filter('frontend')">FrontEnd</button>
				</span>
				<span
					class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
				>
					<button @click="filter('backend')">BackEnd</button>
				</span>
				<span
					class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
				>
					<button @click="filter('tools_productivity')">Tools/Productivity</button>
				</span>
				<span
					class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
				>
					<button @click="all">All</button>
				</span>
			</div>
			<div class="mx-auto pb-6 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
				<div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
					<BlogCard
						v-for="(article, index) in articles"
						:key="index"
						:title="article.title"
						:excerpt="article.excerpt"
						:tags="article.tags"
						image="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						:date="article.date"
						:time="article.time"
						:slug="article.slug"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import BlogCard from "~/components/Card/BlogCard";
export default {
	components: { BlogCard },
	async asyncData({ $content, params, error }) {
		try {
			const articles = await $content(`articles`).fetch();
			return { articles };
		} catch (e) {
			error({ statusCode: 404, message: "Post not found" });
		}
	},
	methods: {
		async filter(filter) {
			this.articles = await this.$content("articles")
				.where({ tags: `${filter}` })
				.fetch();
		},
		async all() {
			this.articles = await this.$content("articles").fetch();
		}
	}
};
</script>

<style>
</style>
