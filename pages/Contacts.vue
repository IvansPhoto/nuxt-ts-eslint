<template>
  <main id="Main">
    <h1>{{ $t('TitleCon') }}</h1>

    <div id="Address">
      <p>
        <strong>{{ $t('OurAddress') }}</strong>
      </p>
      <p>{{ $t('Address1') }}</p>
      <p>{{ $t('Address2') }}</p>
      <p>+7 812 385-14-15</p>
      <p>info@nanofibers.ru</p>
    </div>

    <form netlify name="contact" method="POST" netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
      <label style="display: none">Don’t fill this out if you're human: <input name="bot-field" type="text"></label>

      <label for="Name">{{ $t('Name') }}:</label>
      <input
        id="Name"
        :key="name"
        v-model="userName"
        type="text"
        name="name"
        :placeholder="[[$t('NameText')]]"
        required
      >

      <label for="Email">Email:</label>
      <input
        id="Email"
        :key="email"
        v-model="userEmail"
        type="email"
        name="email"
        :placeholder="[[$t('EmailText')]]"
        required
      >

      <label for="Telephone">{{ $t('Phone') }}:</label>
      <input
        id="Telephone"
        :key="telephone"
        v-model="userTelephone"
        type="tel"
        name="telephone"
        :placeholder="[[$t('PhoneText')]]"
        required
      >

      <label for="Role">{{ $t('Role') }}:</label>
      <input
        id="Role"
        :key="role"
        v-model="userRole"
        type="text"
        name="role"
        :placeholder="[[$t('RoleText')]]"
      >

      <label for="Message">{{ $t('Message') }}:</label>
      <textarea
        id="Message"
        :key="message"
        v-model="userMessage"
        name="message"
        :placeholder="[[$t('MessageText')]]"
        autocomplete="off"
        rows="4"
        cols="50"
        required
      />

      <div data-netlify-recaptcha="true" />

      <button class="button-contact">
        {{ $t('Send') }}
      </button>
    </form>
  </main>
</template>

<script>
export default {
	name: 'Contacts',
	scrollToTop: false,
	data () {
		return { userName: '', userEmail: '', userTelephone: '', userRole: '', userMessage: '' }
	},
	head () {
		return {
			title: this.$t('Contacts.Title'),
			meta: [{ hid: 'description', name: 'description', content: this.$t('Contacts.Description') }]
		}
	},
	methods: {
		createFormDataObj (data) {
			const formData = new FormData()
			for (const key of Object.keys(data)) {
				formData.append(key, data[key])
			}
			return formData
		},
		handleSubmit () {
			const data = {
				'form-name': 'contact',
				name: this.userName,
				email: this.userEmail,
				telephone: this.userTelephone,
				role: this.userRole,
				message: this.userMessage
			}

			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(this.createFormDataObj(data)).toString()
			})
				.then(() => this.$router.push('response'))
				.catch(error => alert(error))
		}
	}
}

</script>

<style scoped>

</style>
