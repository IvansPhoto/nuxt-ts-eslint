<template>
  <main>
    <h1>Blog</h1>
    <h2>{{ news.length }}</h2>
    <p v-for="item in news" :key="item.title">
      {{ item.title }}
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import IBlogPost from '~/Interfaces/IBlogPost'

export default Vue.extend({
	async asyncData (ctx: Context): Promise<Object> {
		const {
			$content,
			app
		} = ctx
		const news: any = await $content(app.i18n.locale).sortBy('slug', 'desc').fetch()
		return { news }
	},
	data () {
		return {
			news: {} as IBlogPost[]
		}
	}
})
</script>

<style></style>
