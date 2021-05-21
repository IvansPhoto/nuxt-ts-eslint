<template>
  <footer>
    <div class="address">
      <p>{{ $t('RightsReserved') }} {{ new Date().getFullYear() }}<span>©</span></p>
      <p>{{ $t('Address1') }}</p>
    </div>

    <div class="phones">
      <p>+7 9** ***-**-**</p>
    </div>

    <div class="terms">
      <nuxt-link :to="localePath('/terms-of-use')" no-prefetch>
        {{ $t('TermsOfUse') }}
      </nuxt-link>
      <nuxt-link :to="localePath('/privacy-policy')" no-prefetch>
        {{ $t('PrivacyPolicy') }}
      </nuxt-link>
    </div>

    <LangSwitcher />
  </footer>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
	name: 'Footer',
	components: {
		LangSwitcher
	}
}
</script>

<style lang="scss">
@import "assets/scss/scss-variables";

	footer {
		min-height: $footer-min-height;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 0.1rem solid var(--colorFont);
	}

	@media (max-width: #{$media-screen-mobile}) {
		footer {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem;
				p,
				a {
					padding: 0.5em;
					font-size: 1rem;
				}
		}
	}
</style>
