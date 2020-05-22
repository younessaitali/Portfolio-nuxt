<template>
	<div class="pt-2 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
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
			>FrontEnd</span>
			<span
				class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
			>BackEnd</span>
			<span
				class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
			>Tools/Productivity</span>
		</div>
		<div class="mx-auto pb-6 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
				<BlogCard
					title="Improve your customer experience"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Sint harum rerum voluptatem quo recusandae magni placeat
									saepe molestiae, sed excepturi cumque corporis
									perferendis hic."
					:tags="['Case Study']"
					image="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				/>
				<BlogCard
					title="Boost your conversion rate"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Architecto accusantium praesentium eius, ut atque fuga
										culpa, similique sequi cum eos quis dolorum."
					:tags="['Blog']"
					image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<BlogCard
					title="How to use search engine optimization to drive sales"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Velit facilis asperiores porro quaerat doloribus,
										eveniet dolore. Adipisci tempora aut inventore optio
										animi., tempore temporibus quo laudantium."
					:tags="['Video']"
					image="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import BlogCard from "~/components/Card/BlogCard";
export default {
	components: { BlogCard }
};
</script>

<style>
</style>
