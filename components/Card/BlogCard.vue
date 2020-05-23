<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<div class="flex-shrink-0">
			<img class="h-48 w-full object-cover" :src="image" alt />
		</div>
		<div class="flex-1 bg-white p-6 flex flex-col justify-between">
			<div class="flex-1">
				<div class="flex">
					<p
						v-for="(tag, index) in tagsToArray"
						:key="index"
						class="text-sm ml-2 leading-5 font-medium text-indigo-600"
					>
						<a href="#" class="hover:underline">{{tag}}</a>
					</p>
				</div>
				<nuxt-link :to="`/blog/post/${slug}`">
					<a href="#" class="block">
						<h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">{{title}}</h3>
						<p class="mt-3 text-base leading-6 text-gray-500">{{excerpt}}</p>
					</a>
				</nuxt-link>
			</div>
			<div class="mt-2 flex text-sm leading-5 text-gray-900">
				<time datetime="2020-03-16">{{date}}</time>
				<span class="mx-1">&middot;</span>
				<span>{{time}}</span>
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
		slug: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		excerpt: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		time: {
			type: String,
			required: true
		},
		tags: {
			type: String,
			required: true
		}
	},
	computed: {
		tagsToArray() {
			return this.tags.split(", ");
		}
	}
};
</script>

<style>
</style>
