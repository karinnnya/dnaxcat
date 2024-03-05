
<template>
  <header :class="headerClass" class="drop-shadow-xl  p-4 fixed w-full z-50 navbar">
    <div class="logo w-40  absolute md:left-1/2  md:-translate-x-1/2 top-0 " >
      <RouterLink to="/"> <img class=""
          src="../assets/images/logo.png"
          alt=""></RouterLink>


    </div>

    <div class="mx-auto container md:flex justify-between hidden">
      <ul class="flex justify-between w-1/3  whitespace-nowrap">
        <li>
          <RouterLink to="/news">
            <div class="flex items-center px-1 pointer-events-auto">
              <NewsIcon :class="headerClass" class="w-7 mr-1 "></NewsIcon>喵窩消息
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/area">
            <div class="flex items-center px-1 pointer-events-auto">
              <PawIcon :class="headerClass" class="w-5 mr-1"></PawIcon>喵窩角色
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">
            <div class="flex items-center px-1 pointer-events-auto">
              <StoryIcon :class="headerClass" class="w-7 mr-1"></StoryIcon>喵窩故事

            </div>
          </RouterLink>
        </li>
      </ul>
      <ul class="flex justify-between w-1/3  whitespace-nowrap">
        <li>
          <a href="https://www.youtube.com/@dnaxcat-king/videos" target="_blank">
            <div class="flex items-center px-1 pointer-events-auto">
              <VideoIcon :class="headerClass" class="w-7 mr-1"></VideoIcon>喵窩影音
            </div>

          </a>

        </li>
        <li>
          <a href="https://www.zeczec.com/users/2245490?tab=projects" target="_blank">
            <div class="flex items-center px-1 pointer-events-auto">
              <GamesIcon :class="headerClass" class="w-7 mr-1"></GamesIcon>喵窩遊戲
            </div>

          </a>

        </li>
        <li>

          <a href="https://dnaxcattalk.dnaxcat.net/forum.php" target="_blank">
            <div class="flex items-center px-1 pointer-events-auto">
              <PeopleIcon :class="headerClass" class="w-7 mr-1"></PeopleIcon>喵窩論壇
            </div>

          </a>


        </li>
      </ul>
    </div>



    <button class="float-right md:hidden block pointer-events-auto" @click="openHeader"><svg xmlns="http://www.w3.org/2000/svg" height="40"
        viewBox="0 -960 960 960" width="40">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg></button>
  </header>
  <!-- 手機//////////////////////////////////// -->
  <div ref="phoneHeader" class="fixed right-0 z-50 p-20 h-full phoneHeader bg-white md:hidden block " @click="openHeader">
    <ul class="flex flex-col justify-between  h-1/2">
      <li>
        <RouterLink to="/news">
          <div class="flex items-center">
            <NewsIcon :class="headerClass" class="w-7 mr-1"></NewsIcon>喵窩消息
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/area">
          <div class="flex items-center">
            <PawIcon :class="headerClass" class="w-5 mr-1"></PawIcon>喵窩角色
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">
          <div class="flex items-center">
            <StoryIcon :class="headerClass" class="w-7 mr-1"></StoryIcon>喵窩故事

          </div>
        </RouterLink>
      </li>
      <li>
        <a href="https://www.youtube.com/@dnaxcat-king/videos" target="_blank">
          <div class="flex items-center">
            <VideoIcon :class="headerClass" class="w-7 mr-1"></VideoIcon>喵窩影音
          </div>

        </a>

      </li>
      <li>
        <a href="https://www.zeczec.com/users/2245490?tab=projects" target="_blank">
          <div class="flex items-center">
            <GamesIcon :class="headerClass" class="w-7 mr-1"></GamesIcon>喵窩遊戲
          </div>

        </a>

      </li>
      <li>

        <a href="https://dnaxcattalk.dnaxcat.net/forum.php" target="_blank">
          <div class="flex items-center">
            <PeopleIcon :class="headerClass" class="w-7 mr-1"></PeopleIcon>喵窩論壇
          </div>

        </a>


      </li>
    </ul>




  </div>
  <!-- <div class="wrapper">
        <HelloWorld msg="You did it!" />
  
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div> -->
  <RouterView />

  <footer v-show="$route.path !== '/area'" class="p-40 bg-yellow-700 footer ">
    <p>這裡是底部資訊</p>
  </footer>
</template>
  
<style lang="scss">
header {
  line-height: 1.5;
  // max-height: 100vh;
}

.footer {
  height: 50px;
  /*設定footer本身高度*/
}

// .logo {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   // z-index: -1;
//   transform: translate(-50%, -50%);
// }
</style>
  
<script >
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import PawIcon from '../components/icon/PawIcon.vue'
import NewsIcon from '../components/icon/NewsIcon.vue'
import GamesIcon from '../components/icon/GamesIcon.vue'
import PeopleIcon from '../components/icon/PeopleIcon.vue'
import VideoIcon from '../components/icon/VideoIcon.vue'
import StoryIcon from '../components/icon/StoryIcon.vue'







import { gsap } from 'gsap'


export default {

  setup() {

    
    // let ctx;
    let openH;
    const openHeader = () => {
      openH.reversed(!openH.reversed());

    };

    const route = useRoute();
    
    let headerClass = ref('bg-transparent fill-yellow-700');
    let isTransparent = ref(true)

    const setHeaderClass = () => {
      // Check if route.value is defined before accessing its properties
      if (route && route.path) {
        // console.log( route.path)

        if (route.path === '/' || route.path === '/area') {
          headerClass.value = isTransparent.value
            ? 'bg-transparent text-white fill-white  pointer-events-none'
            : 'bg-white ';
        } else {
          headerClass.value = 'bg-white ';
        }
      }
    };
    const handleScroll = () => {
      isTransparent.value = window.scrollY < 50;
      setHeaderClass();
    };

    watchEffect(() => {
      setHeaderClass();
    });
    onMounted(() => {
      console.log(route.path);
      window.addEventListener('scroll', handleScroll);
      openH = gsap.timeline()
        .fromTo('.phoneHeader', {

          x: "300",
          ease: "expo.in",

        }, { x: "0", duration: 0.2 })
        .reverse();

    })

    return {
      route,
      openHeader,
      headerClass
    };


  },
  components: {
    RouterLink,
    RouterView,
    PawIcon,
    NewsIcon,
    GamesIcon,
    PeopleIcon,
    VideoIcon,
    StoryIcon,
  },
  // watch: {
  //   '$route': 'openHeader'
  // },

}

</script>
  