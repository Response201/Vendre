<template >
	<article class="homeContainer">
		<section v-if="loading"><Loading /></section>
		
			<article class="usersContainer" v-if="!loading">
				<section class="usersContainer___users" v-for="user in users" :key="user.id">
					<Card
						:id="user.id"
						email="Kontakta"
						:first_name="user.first_name"
						:last_name="user.last_name"
						:avatar="user.avatar"
						:page=page
					/>
				</section>
			</article>
			<section class="pageBtnContainer" v-if="!loading">
				<button @click="fetchUsers(page - 1)" :disabled="page === 1">Previous</button>
				<button @click="fetchUsers(page + 1)" :disabled="page >= totalPages">Next</button>
			</section>
	
	</article>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Card from "../components/Card.vue";
import Loading  from '../components/Loading.vue';
const loading = ref(true);
const users = ref([]);
const page = ref(1);
const perPage = 6;
const totalPages = ref(2);

const fetchUsers = async (newPage) => {
	if (newPage < 1 || newPage > totalPages.value) return;

	loading.value = true;
	try {
		const response = await axios.get(`https://reqres.in/api/users`, {
			params: {
				page: newPage,
				per_page: perPage.value,
			},
		});
		users.value = response.data.data;
		page.value = response.data.page;
		totalPages.value = response.data.total_pages;

	} catch (error) {
		console.error("Error fetching users:", error);
	} finally {
		loading.value = false;
	}

};

onMounted(() => {
	fetchUsers();
});
</script>
