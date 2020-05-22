<template>
	<section id="project">
		<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-24 lg:px-8">
			<div class="relative max-w-screen-xl mx-auto">
				<div class="text-center">
					<h2
						class="text-3xl leading-9 tracking-tight font-extrabold text-color-text sm:text-4xl sm:leading-10"
					>Side Project</h2>
				</div>
				<div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
					<ProjectCard
						title="Moviee"
						image="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto accusantium praesentium eius."
						:tech="['tailwind','Vue','Nuxt']"
					/>
				</div>
				<div class="flex justify-center items-center mt-10">
					<button
						type="button"
						class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
					>See more</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProjectCard from "~/components/Card/ProjectCard";
export default {
	name: "ProjectSection",
	components: { ProjectCard }
};
</script>

<style>
</style>
