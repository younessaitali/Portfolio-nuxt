<template>
	<div>
		<Hero />
		<main>
			<AboutSection />
			<ProjectSection />
			<BlogSection :articles="articles" />
		</main>
	</div>
</template>

<script>
import Hero from "~/components/Hero";
import AboutSection from "~/components/AboutSection";
import ProjectSection from "~/components/ProjectSection";
import BlogSection from "~/components/BlogSection";
export default {
	components: {
		Hero,
		AboutSection,
		ProjectSection,
		BlogSection
	},
	async asyncData({ $content, params, error }) {
		try {
			const articles = await $content(`articles`)
				.limit(3)
				.fetch();
			return { articles };
		} catch (e) {
			error({ statusCode: 404, message: "Post not found" });
		}
	}
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
