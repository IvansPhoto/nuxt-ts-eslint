<template>
  <main Id="Main">
    <h1>My Site</h1>
    <h2>Web site</h2>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

	@Component
export default class Blog extends Vue {
	head () {
		return {
			title: this.$t('News.Meta.Title'),
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.$t('News.Meta.Description')
				}
			]
		}
	}
}
</script>

<style lang="scss"></style>
