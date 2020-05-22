<template>
	<div>
		<Hero />
		<main>
			<AboutSection />
			<ProjectSection />
			<BlogSection />
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
