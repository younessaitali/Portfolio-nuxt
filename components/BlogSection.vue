<template>
	<section>
		<div class="relative bg-nav pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="absolute inset-0">
				<div class="bg-white h-1/3 sm:h-2/3"></div>
			</div>
			<div class="relative max-w-screen-xl mx-auto">
				<div class="text-center">
					<h2
						class="text-3xl leading-9 tracking-tight font-extrabold text-color-text sm:text-4xl sm:leading-10"
					>From the blog</h2>
					<p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
						libero labore natus atque, ducimus sed.
					</p>
				</div>
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
				<div class="flex justify-center items-center mt-10">
					<button
						type="button"
						class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150"
					>Check out more</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BlogCard from "~/components/Card/BlogCard";
export default {
	name: "BlogSection",
	components: { BlogCard }
};
</script>

<style>
</style>
