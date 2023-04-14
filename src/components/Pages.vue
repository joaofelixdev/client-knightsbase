<template>
  <div class='container pages-container'>
    <div class='page-create'>
      <a href='/knights/create'>
        Create a new knight
        <fa icon='shield' class='shield-icon' />
      </a>
    </div>
    <div class='page-hall'>
      <a href='/hall-of-heroes'>
        <fa icon='star' class='star-icon' />
        Hall of Heroes
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesComponent',
};
</script>

<style scoped>
  .pages-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .page-create,
  .page-hall {
    width: 50%;
    display: flex;
  }

  .page-create {
    justify-content: end;
  }

  .page-create a {
    position: relative;
    margin-right: 10px;
    background-color: #4895ef;
    border-radius: 4px;
    font-family: 'Russo One', sans-serif;
    text-decoration: none;
    color: #fff;
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 230px;
  }

  .page-create a:hover {
    background: #4361ee;
  }

  .page-hall {
    justify-content: start;
  }

  .page-hall a {
    position: relative;
    margin-left: 10px;
    background-color: #ffcf48;
    border-radius: 4px;
    font-family: 'Russo One', sans-serif;
    text-decoration: none;
    color: #9a6700;
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 230px;
  }

  .page-hall a:hover {
    background: #edb20e;
  }

  .star-icon {
    margin-right: 5px;
  }

  .shield-icon {
    margin-left: 5px;
  }
</style>
