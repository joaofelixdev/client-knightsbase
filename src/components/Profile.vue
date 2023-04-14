<template>
  <div class='profile-container'>
    <div class="profile-picture">
      <img src="/images/icon-helmet.png" alt="Knight Icon" class="knight-icon">
    </div>
    <div class="profile-info">
      <div class="profile-name">
        <input
          aria-label="profile-name"
          type="text"
          name="profile-name"
          value="João Felix"
          disabled
        />
        <button>
          <fa icon="pen" />
        </button>
      </div>
      <div class="profile-title">
        <p>The creator</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
};
</script>

<style scoped>
  .profile-container {
    display: flex;
    align-items: center;
    position: absolute;
    width: 300px;
    height: 80px;
    border-radius: 5px;
    top: 10px;
    left: 10px;
    background-color: #fff;
  }

  .profile-picture {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-info {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .profile-info .profile-name {
    width: 100%;
    height: 58%;
    display: flex;
    align-items: end;
  }

  .profile-info .profile-name input {
    max-width: 75%;
    height: 40px;
    border: none;
    background-color: #f3eaff;
    padding: 0 5px;
    border-radius: 3px;
    font-family: 'Anton', sans-serif;
    font-size: 1.2em;
    color: #6c757d;
  }

  .profile-info .profile-name input:disabled {
    background-color: #fff;
  }

  .profile-info .profile-name button {
    height: 40px;
    width: 40px;
    background-color: #fff;
    border: none;
    color: #8338ec;
    transition: .5s;
    border-radius: 4px;
  }

  .profile-info .profile-name button:hover {
    cursor: pointer;
    background-color: #8338ec;
    color: #fff;
  }

  .profile-info .profile-title {
    height: 42%;
    display: flex;
    align-items: start;
  }

  .profile-info .profile-title p {
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;
    font-size: .7em;
    margin-left: 5px;
    color: #8338ec;
  }

  .knight-icon {
    width: 80%;
  }
</style>
