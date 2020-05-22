<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<div class="flex-shrink-0">
			<img class="h-48 w-full object-cover" :src="image" alt />
		</div>
		<div class="flex-1 bg-white p-6 flex flex-col justify-between">
			<div class="flex-1">
				<div class="flex">
					<p
						v-for="(tag, index) in tags"
						:key="index"
						class="text-sm ml-2 leading-5 font-medium text-indigo-600"
					>
						<a href="#" class="hover:underline">{{tag}}</a>
					</p>
				</div>
				<a href="#" class="block">
					<h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">{{title}}</h3>
					<p class="mt-3 text-base leading-6 text-gray-500">{{description}}</p>
				</a>
			</div>
			<div class="mt-2 flex text-sm leading-5 text-gray-900">
				<time datetime="2020-03-16">Mar 16, 2020</time>
				<span class="mx-1">&middot;</span>
				<span>6 min read</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BlogCard",
	props: {
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		tags: {
			type: Array,
			required: true
		}
	}
};
</script>

<style>
</style>
