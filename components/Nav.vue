<template>
  <nav>
    <div id="NavDesktop">
      <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
        {{ $t('Nav.About') }}
      </nuxt-link>
      <LangSwitcher />
    </div>

    <transition name="showingMenu">
      <div v-if="showNavMobile" id="NavMobile">
        <div class="showingMenuItems" @click="showNavMobile = !showNavMobile">
          <nuxt-link exact-active-class="activeLink" :to="localePath('/')">
            {{ $t('Nav.About') }}
          </nuxt-link>
          <LangSwitcher />
        </div>
      </div>
    </transition>
    <button
      :class="{ changeState: showNavMobile }"
      class="button"
      aria-label="Menu button"
      @click="showNavMobile = !showNavMobile"
    />
    <button :key="isDarkTheme" class="changeColor" aria-label="Change color scheme button" @click="darkTheme">
      <span class="changeColorText">{{ isDarkTheme ? 'Light' : 'Dark' }}</span>
    </button>
  </nav>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
	name: 'Nav',
	components: {
		LangSwitcher
	},
	data () {
		return {
			showNavMobile: false,
			isDarkTheme: true
		}
	},
	methods: {
		darkTheme () {
			const bodyStyle = document.body.style
			if (this.isDarkTheme) {
				bodyStyle.setProperty('--colorFont', 'rgb(41, 41, 41)')
				bodyStyle.setProperty('--colorBackground', 'rgb(250, 250, 250)')
				bodyStyle.setProperty('--navGradient', 'linear-gradient(rgba(250, 250, 250, 1), rgba(250, 250, 250, 0))')
			} else {
				bodyStyle.setProperty('--colorFont', 'rgb(250, 250, 250)')
				bodyStyle.setProperty('--colorBackground', 'rgb(41, 41, 41)')
				bodyStyle.setProperty('--navGradient', 'linear-gradient(rgba(41, 41, 41, 1), rgba(41, 41, 41, 0))')
			}
			this.isDarkTheme = !this.isDarkTheme
		}
	}
}
</script>
<style lang="scss">
@import "assets/scss/scss-variables";

	.showingMenu-enter-active,
	.showingMenu-leave-active {
		transition: opacity 1.5s;
	}

	.showingMenu-enter,
	.showingMenu-leave-to {
		opacity: 0;
	}

	.activeLink {
		color: var(--colorFont);
	}

	nav {
		width: 100%;
		z-index: 3;

		a {
			text-transform: uppercase;
			font-weight: 500;
		}
	}

	#NavDesktop {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		font-size: 1.25rem;
		border-bottom: 0.1rem solid var(--colorFont);
		z-index: 10;
		color: var(--colorFont);
		min-height: #{$footer-min-height};

		:first-child {
			margin-right: auto;
			padding: 0;
		}

		> * {
			padding: 0 1em;
			cursor: pointer;
		}
	}

	.activeLink {
		color: var(--colorCyanC);
	}

	#NavMobile {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		max-width: 35vw;
		min-width: 20rem;
		display: flex;
	}

	.button {
		all: unset;
		border: 0.25rem solid var(--colorCyanC);
		border-radius: 50%;
		background-color: var(--colorFont);
		cursor: pointer;
		position: fixed;
		top: 1.25rem;
		right: 1.25rem;
		width: 1.5rem;
		height: 1.5rem;
		z-index: 100;
		transition-duration: 250ms;
	}

	.changeState {
		transform: rotate(45deg);
		border: 0.25rem solid var(--colorFont);
		background-color: var(--colorCyanC);
		border-radius: 50% 0;
	}

	.changeColor {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		bottom: 1rem;
		left: 1rem;
		width: auto;
		height: 1.5rem;
		border: none;
		border-radius: 0.75rem;
		color: var(--colorBackground);
		background-color: var(--colorFont);
		padding: 0 0.5em;
		z-index: 100;
	}

	@media (max-width: #{$media-screen-mobile}) {
		#NavDesktop {
			display: none;
		}

		#NavMobile {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			min-width: 100%;
			margin: 0;
			padding: 1rem 2rem;
			box-sizing: border-box;

			> * {
				font-size: 2.5rem;
			}
		}

		.button {
			width: 2rem;
			height: 2rem;
			box-sizing: border-box;
		}

		.changeColor {
			width: 1.5rem;
			padding: 0;
			left: unset;
			right: 1rem;
			border: 0.1rem solid var(--colorFont);
			box-sizing: border-box;
		}

		.changeColorText {
			display: none;
		}
	}
</style>
