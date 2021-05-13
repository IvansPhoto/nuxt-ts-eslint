<template>
  <div class="langSwitcher">
    <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="lLink">
      <img src="/web-icon.svg" alt="Lang" class="langSwitcherImg" sizes="2rem">
      {{ locale.code }}
    </nuxt-link>
  </div>
</template>

<script lang="js">
export default {
	name: 'LangSwitcher',
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
}
</script>

<style lang="scss">
	.langSwitcher {
		.lLink {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-transform: uppercase;
		}

		.langSwitcherImg {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
