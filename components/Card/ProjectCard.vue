<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<div class="flex-1 bg-white p-2 flex items-center justify-center">
			<h3 class="text-xl leading-7 font-semibold text-gray-900">{{title}}</h3>
		</div>
		<div class="flex-shrink-0">
			<img
				class="h-48 w-full object-cover"
				src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
				alt
			/>
		</div>
		<div class="flex-1 bg-white p-6 flex flex-col justify-between">
			<div class="flex-1">
				<div class="text-sm leading-5 font-medium text-gray-100">
					<a
						v-for="(item, index) in tech"
						:key="index"
						href="#"
						class="mr-1 p-1 rounded-full hover:underline"
						:class="[techColors[index][0],techColors[index][1]]"
					>{{item}}</a>

					<a href="#" class="block">
						<p class="mt-3 text-base leading-6 text-gray-500">{{description}}</p>
					</a>
				</div>
			</div>
			<div class="mt-6 flex items-center justify-center">
				<span class="inline-flex mx-2 rounded-md shadow-sm">
					<button
						type="button"
						class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
					>Code Source</button>
				</span>
				<span class="inline-flex mx-2 rounded-md shadow-sm">
					<button
						type="button"
						class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
					>Demo</button>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectCard",
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
		tech: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			techColors: [
				["bg-indigo-500", "hover:bg-indigo-700"],
				["bg-green-500", "hover:bg-green-700"],
				["bg-blue-500", "hover:bg-blue-700"],
				["bg-blue-500", "hover:bg-blue-700"]
			]
		};
	}
};
</script>

<style>
</style>
