<template>
  <footer>
    <div class="address">
      <p>{{ $t('RightsReserved') }} {{ new Date().getFullYear() }}<span>©</span></p>
      <p>{{ $t('Address1') }}</p>
    </div>

    <div class="phones">
      <p>+7 9**</p>
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
	footer {
		width: 100%;
		min-height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 1rem;
		border-top: 0.1rem solid var(--colorFont);
		color: var(--colorFont);
		background-color: var(--colorBackground);

		.address,
		.phones,
		.terms {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 1rem 0;

			p,
			a {
				font-size: 1.25rem;
				text-align: center;
				font-weight: 500;
				padding: 0;
			}
		}
	}

	@media (max-width: 1000px) {
		footer {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			.address,
			.phones,
			.terms {
				p,
				a {
					padding: 0.5em;
					font-size: 1rem;
				}
			}
		}
	}
</style>
