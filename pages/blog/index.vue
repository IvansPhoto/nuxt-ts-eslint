<template>
  <main>
    <h1>Blog</h1>
    <h2>{{ news.length }}</h2>
  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import IBlogPost from '~/Interfaces/IBlogPost'

	@Component
export default class Blog extends Vue {
	async asyncData (ctx: Context): Promise<Object> {
		const { $content, app } = ctx
		const news: any = await $content(app.i18n.locale).sortBy('slug', 'desc').fetch()
		return { news }
	}

		@Prop() news: IBlogPost[] = [];
}
</script>

<style></style>
