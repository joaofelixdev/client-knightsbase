<template>
  <div class="details-container">
    <div class="knight-helmet">
      <img src="/images/icon-helmet.png" alt="Knight helmet icon">
    </div>
    <div class="knight-info">
      <div>
        <span>Name: </span>
        {{  knight.name  }}
      </div>
      <div>
        <span>Nickname: </span>
        {{  knight.nickname  }}
      </div>
      <div>
        <span>Date of birth: </span>
        {{  handleDateOfBirth(knight.dateOfBirth)  }}
      </div>
      <div>
        <span>Weapons: </span>
        2
      </div>
    </div>
  </div>
  <BackButton />
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api.ts';
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'DetailsView',
  setup() {
    const route = useRoute();
    const knight = ref({});

    const fetchKnight = () => api.get(`knights/${route.params.id}`)
      .then((response) => {
        knight.value = response.data;
      });

    onMounted(fetchKnight);

    return { knight };
  },
  components: {
    BackButton,
  },
  methods: {
    handleDateOfBirth(handleDateOfBirth) {
      const date = new Date(handleDateOfBirth);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
  },
};
</script>

<style>
  .details-container {
    width: 300px;
    height: 400px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .knight-helmet img {
    width: 120px;
  }

  .knight-helmet,
  .knight-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .knight-helmet {
    height: 40%;
  }

  .knight-info {
    width: 100%;
    height: 60%;
  }

  .knight-info div {
    width: 90%;
    height: 40px;
    margin: 2px auto;
    background-color: #ebebeb;
    color: #7c7c7c;
    border-radius: 4px;

    display: flex;
    justify-content: start;
    align-items: center;

    padding-left: 10px;

    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;
  }

  .knight-info div span {
    margin-right: 5px;
    color: #4c4c4c;
  }
</style>
