<template>
  <div class="userContainer">
    <div v-if="loading"><Loading /></div>
    <div v-else>
      <Card 
        :id="user.id" 
        :email="user.email" 
        :first_name="user.first_name" 
        :last_name="user.last_name" 
        :avatar="user.avatar" 
        :page = user.page
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Card from '../components/Card.vue';
import Loading  from '../components/Loading.vue';
const route = useRoute();
const loading = ref(true);
const user = ref(null); 



const fetchUser = async () => {
  loading.value = true;
  const userId = parseInt(route.params.id);
  const page = parseInt(route.params.page);
  try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL, {
        params: {
          page: page,
          per_page: 6,
        },
      });
      user.value = response.data.data.find(u => u.id === userId);
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false;
  }
};


onMounted(fetchUser); 
</script>


