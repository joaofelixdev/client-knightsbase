<template>
  <div class='container'>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Weapons</td>
          <td>Key Attribute</td>
          <td>Power Attack</td>
          <td>Experience</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="knight in knights" :key="knight._id">
          <td>{{ knight.name }}</td>
          <td>{{ calculateAge(knight.dateOfBirth) }}</td>
          <td>{{ knight.weapons.length }}</td>
          <td>{{ getKeyAttribute(knight.attributes) }}</td>
          <td>{{ calculateAttack(knight) }}</td>
          <td>{{ calculateExperience(knight) }}</td>
          <td class='actions'>
            <a :href="'/knights/' + knight._id" class='details-button'>
              <fa icon='eye'/>
              <span>Details</span>
            </a>
            <button class='hero-button' @click="becomeHero(knight._id)">
              <fa icon='star'/>
              <span>Hero</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from '@/services/api.ts';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'KnightsListComponent',
  setup() {
    const knights = ref([]);
    const fetchKnights = () => api.get('knights/')
      .then((response) => {
        knights.value = response.data;
      });

    onMounted(fetchKnights);

    return { knights };
  },
  methods: {
    calculateAge(dateOfBirth) {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      const ageDiff = today.getTime() - birthDate.getTime();
      const ageDate = new Date(ageDiff);
      const age = ageDate.getUTCFullYear() - 1970;
      return age;
    },
    getKeyAttribute() {
      return 'Strenght';
    },
    calculateAttack() {
      return 22;
    },
    calculateExperience(knight) {
      const knightAge = this.calculateAge(knight.dateOfBirth);
      return knightAge < 7 ? 0 : Math.floor((knightAge - 7) * 22 ** 1.45);
    },
    becomeHero(id) {
      console.log(id);
    },
  },
});
</script>

<style scoped>
  table {
    margin-top: 50px;
    width: 100%;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 10px 10px 20px 10px;
    background-color: #fff;
  }

  table thead {
    font-family: 'Russo One', sans-serif;
    letter-spacing: 1px;
    height: 60px;
    text-transform: uppercase;
  }

  table tbody {
    padding-top: 40px;
  }

  table tbody tr {
    height: 40px;
  }
  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .actions button,
  .actions a {
    border: none;
    font-family: 'Russo One', sans-serif;
    font-size: .7em;
    text-transform: uppercase;
  }

  .actions button:hover {
    cursor: pointer;
  }

  .actions .details-button,
  .actions .hero-button {
    width: 100px;
    height: 30px;
    background-color: #ccc;

    margin: 2px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .actions a {
    text-decoration: none;
  }

  .actions button span,
  .actions a span {
    margin-left: 5px;
  }

  .actions .details-button {
    background-color: #4895ef;
    color: #fff;
  }

  .actions .hero-button {
    background-color: #ffcf48;
    color: #9a6700;
  }
</style>
