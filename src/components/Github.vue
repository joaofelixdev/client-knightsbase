<template>
  <a href="https://github.com/joaofelixdev" target="_blank" class="github-link">
    <img src="/images/github-logo.svg" alt="GitHub Logo" class="github-logo">
  </a>
</template>

<script>
export default {
  name: 'GithubComponent',
};
</script>

<style scoped>
  .github-link {
    padding: 10px 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-family: 'Roboto', sans-serif;
    background-color: #711ee6;
    color: #f3eaff;
    text-decoration: none;
    border-radius: 4px;
  }

  .github-link:hover {
    top: 11px;
    right: 9px;
  }

  .github-logo {
    width: 1.5em;
  }
</style>
