<template>
	<div class="pt-2 pb-12 bg-color-bg sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
		<div class="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<div class="text-center">
				<h2
					v-if="article"
					class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
				>{{article.title }}</h2>
				<h2
					v-else
					class="text-4xl tracking-tight leading-10 font-extrabold text-color-text sm:text-5xl sm:leading-none md:text-6xl"
				>404 ERROR</h2>
				<p
					v-if="article"
					class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
				>{{article.excerpt}}</p>
				<p
					v-else
					class="mt-3 max-w-md mx-auto text-base text-color-secondary-text sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
				>Article Not found</p>
			</div>
		</div>
		<div
			class="mx-auto pb-6 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 border-b-2 border-gray-600"
		>
			<span
				class="inline-flex mt-1 items-center px-8 py-3 rounded-full text-xl font-medium leading-5 bg-indigo-100 text-indigo-800"
			>FrontEnd</span>
		</div>
		<article class="mx-auto pb-6 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
			<nuxt-content :document="article" />
		</article>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slug: this.$route.params.slug
		};
	},
	async asyncData({ $content, params, error }) {
		const slug = params.slug;
		try {
			const article = await $content(`articles/${slug}`).fetch();
			return { article };
		} catch (e) {
			error({ statusCode: 404, message: "Post not found" });
		}
	}
};
</script>


<style lang="postcss">
.dark-mode .nuxt-content {
	& h2,
	& h3,
	& blockquote {
		@apply border-gray-800;
	}
	& > code,
	& li > code,
	& p > code,
	& h3 > code {
		@apply bg-gray-800;
	}
}
.nuxt-content h1 {
	@apply text-4xl font-black mb-4 pb-1 border-b -mt-16 pt-24;
}
.nuxt-content h2 {
	@apply text-3xl font-black mb-4 pb-1 border-b -mt-16 pt-24;
	& > a {
		@apply ml-6;
		&::before {
			content: "#";
			@apply text-green-500 font-normal -ml-6 pr-1 absolute opacity-100;
		}
	}
	&:hover {
		& > a::before {
			@apply opacity-100;
		}
	}
}
.nuxt-content h3 {
	@apply text-2xl font-extrabold mb-2 pb-1 border-b -mt-16 pt-20;
	& > a {
		@apply ml-6;
		&::before {
			content: "#";
			@apply text-green-500 font-normal -ml-5 pr-1 absolute opacity-100;
		}
	}
	&:hover {
		& > a::before {
			@apply opacity-100;
		}
	}
}
@screen lg {
	.nuxt-content h2 a,
	.nuxt-content h3 a {
		@apply ml-0;
		&::before {
			@apply opacity-0;
		}
	}
}
.nuxt-content ul,
.nuxt-content ol {
	@apply list-disc list-inside mb-4;
	& > li {
		@apply leading-7;
		& > ul {
			@apply pl-4;
		}
	}
}
.nuxt-content ol {
	@apply list-decimal;
}
.nuxt-content {
	& a {
		@apply underline;
	}
	& p {
		@apply mb-4 leading-7;
	}
	& blockquote {
		@apply py-2 pl-4 mb-4 border-l-4;
		> p:last-child {
			@apply mb-0;
		}
	}
	& > code,
	& li > code,
	& p > code {
		@apply bg-gray-100 p-1 text-sm shadow-xs rounded;
	}
	& h3 > code {
		@apply bg-gray-100 p-1 text-lg shadow-xs rounded;
	}
	& pre[class*="language-"] {
		@apply rounded mt-0 mb-4 bg-gray-800 text-sm relative;
		> code {
			@apply bg-gray-800 relative;
			text-shadow: none;
		}
	}
	& video {
		@apply w-full border rounded shadow-md;
	}
}
.nuxt-content-highlight {
	@apply relative;
	& > .filename {
		@apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
	}
}
</style>
