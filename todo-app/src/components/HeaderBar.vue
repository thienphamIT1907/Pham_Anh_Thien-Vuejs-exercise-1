<template>
  <div class="header-bar">
    <div class="header-bar__app-name">
      <h1>Todo app - VueX VueJS</h1>
    </div>
    <div class="header-bar__profile">
      <img src="./../assets/images/avatar.jpg" alt="avatar.jpg">
      <span>Thiện Phạm</span>
    </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h1, span, img {
    font-weight: 350;
    cursor: pointer;
  }

  .header-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    background: #222f3e;
    box-shadow: 5px 5px 10px #8395a7;
    color: #ccc;
    position: fixed;
    top: 0;
  
  }

  .header-bar__profile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .header-bar__profile span {
    margin-left: 12px;
    width: 100px;

  }

  .header-bar__profile img {
    border-radius: 50%;
    width: 50px;
  }
</style>