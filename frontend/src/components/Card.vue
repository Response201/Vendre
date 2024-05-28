<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import test from "../assets/test.jpg";

const props = defineProps({
	id: Number,
	email: String,
	first_name: String,
	last_name: String,
	avatar: String,
   page: {
    type: Number,
  },
});
const route = useRoute();
</script>

<template>
	<article class="cardContainer">
		<section class="cardContainer___cardItems">
			<img :src="test" alt="" class="overlay" />
			<h3 class="name">{{ first_name }} {{ last_name }}</h3>
			<img :src="avatar" alt="Profil image of user" />
			<div v-if="email === 'Kontakta'">
				<router-link :to="{ name: 'User', params: { id: id, page: page }  }">
					<button>Kontakta {{ first_name }}</button>
				</router-link>
			</div>
			<div v-else>
				<p class="email_text">{{ email }}</p>
			</div>
		</section>
	</article>
</template>
