<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
  </nav> -->
  <!-- <router-view /> -->
  <nav class="menu">
    <div class="menu-container box-border h-full flex">
      <h1 class="website-title">Living the simple life</h1>
      <ul class="flex">
        <li><a href="">Home</a></li>
        <li><a href="">About me</a></li>
        <li><a href="">recent posts</a></li>
      </ul>
    </div>
  </nav>
  <div class="container box-border">

    <h1 class="text-center">
      Let's start getting <span style="color: #b7832f;">more fancy</span>!
    </h1>
    <img class="banner" src="https://picsum.photos/1200/300" alt="Picsum">
    <div class="row justify-between items-start">
      <div class="col-1 box-border">
        <h3 class="mt-0">Tellus vel efficitur molestie</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
        dignissim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam sagittis tellus vel efficitur molestie. Mauris molestie mattis
        lobortis. Donec ultricies fringilla felis.</p>
      </div>
      <div class="col-2 box-border">
        <h3 class="mt-0">Malesuada quam, ac massa congue tempus.</h3>
        <p>Fusce a cursus est. Pellentesque interdum nibh at nisl maximus vulputate.
        Aenean eu sollicitudin enim, nec dictum est. Praesent pretium ligula sit
        amet tempor tempus. In convallis malesuada est, in fringilla odio auctor
        eu. Nunc laoreet, massa sit amet ultricies auctor, enim elit tempor felis,
        eget porttitor ante mauris et dolor. Nullam molestie vel justo eget
        convallis. Cras quis faucibus.</p>
        <p>Ut malesuada bibendum quam, ac accumsan massa pharetra quis.
        Ut tempus sollicitudin dolor. In vitae nisi molestie, sagittis velit et,
        sollicitudin justo. Donec diam metus, pretium eget nunc et, semper
        convallis odio. Vivamus congue tempus urna, id fringilla lectus
        condimentum.</p>
      </div>
      <div class="col-1 bg-brown-600 text-white p-3 box-border">
        <p>Mauris sagittis tincidunt ante ut ultricies. Nunc nulla est, mollis id
        massa nec, volutpat porttitor sem. Nam ligula massa, molestie a enim eu,
        imperdiet mattis enim. Fusce nec vulputate sapien. Proin sed nunc nisl.
        Nulla hendrerit libero sit amet ipsum.</p>
      </div>
    </div>
    <div class="row justify-between">
      <div class="col-3 box-border">
        <h3 class="mt-0">Etiam placerat nisi mauris, at facilisis sem.</h3>
        <p>Quisque tristique volutpat turpis ac interdum.
        Aenean in tincidunt quam, eu commodo risus. Sed dui lacus,
        condimentum non odio ut, imperdiet efficitur risus. Pellentesque
        at finibus ex, vel facilisis sapien. Proin venenatis arcu at
        ultricies.</p>
      </div>
      <div class="col-1 bg-brown-600 text-white p-3 box-border">
        <h3>Aenean dui odio, lacinia id.</h3>
        <p>Pellentesque ac est magna. Curabitur congue nisl nibh, in mattis
        lorem mollis posuere. Sed id facilisis risus. Fusce venenatis
        tempor eleifend. Mauris non tellus.</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
