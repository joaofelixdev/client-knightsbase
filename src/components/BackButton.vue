<template>
  <a href='/' class='back-button'>
    <fa icon="arrow-left" />
    <span>Back</span>
  </a>
</template>

<script>
export default {
  name: 'BackButtonComponent',
};
</script>

<style>
.back-button {
  width: 120px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  color: #8338ec;
  margin: 0 auto 20px auto;

  border-radius: 4px;

  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
  text-decoration: none;

  transition: .4s;
}

.back-button:hover {
  background-color: #8338ec;
  color: #fff;
}

.back-button span {
  margin-left: 10px;
}
</style>
