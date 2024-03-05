<template>
  <div>


    <!-- <div @mousemove="handleMouseMove">

      <div class="h-screen w-full homeBanner ">
        <img class="h-full fixed  homeBg" src="@/assets/images/meow_bg1.jpg" alt="" />

        <div class="">


          <img class="homeBg  fixed top-0 " :src="bgDatas.bg1" alt=""
            :style="{ transform: `translate(${bg3TranslateX}px, ${bg3TranslateY}px)` }" />
          <img class="homeBg   fixed top-0 " :src="bgDatas.bg2" alt=""
            :style="{ transform: `translate(${bg1TranslateX}px, ${bg1TranslateY}px)` }" />
          <img class="homeBg  fixed top-0 " :src="bgDatas.bg3" alt=""
            :style="{ transform: `translate(${bg2TranslateX}px, ${bg2TranslateY}px)` }" />

        </div>

      </div>

      <div>
      </div>

      <div>
        <div class="homeDownIcon z-10 text-3xl absolute bottom-0 left-1/2 right-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50">
            <path
              d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
          </svg>
        </div>
      </div>

    </div>


    <div>

      <div>

        <img class="fixed top-0 -z-10 " :src="bgDatas.bg1b" alt=""
          :style="{ transform: `translate(${bg3TranslateX}px, ${bg3TranslateY}px)` }" />
        <img class="fixed top-0 -z-10" :src="bgDatas.bg2b" alt=""
          :style="{ transform: `translate(${bg1TranslateX}px, ${bg1TranslateY}px)` }" />
        <img class="fixed top-0 -z-10 " :src="bgDatas.bg3b" alt=""
          :style="{ transform: `translate(${bg2TranslateX}px, ${bg2TranslateY}px)` }" />
      </div>







    </div> -->

    <div>
      <p> 第一個gamma：{{ gamma }}</p>
      <p>第二個beta：{{ beta }}</p>
      <p>第二個aplha：{{ aplha }}</p>
    </div>
  </div>
</template>

<style lang="scss"></style>


<script >
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap, ScrollTrigger, TextPlugin } from 'gsap/all'

import newsStores from "@/stores/allStore";



//
import bglg1 from '@/assets/images/homebg/homebg1_01.png'
import bglg2 from '@/assets/images/homebg/homebg2_01.png'
import bglg3 from '@/assets/images/homebg/homebg3_01.png'

import bgmd1 from '@/assets/images/homebg/homebg1_02.png'
import bgmd2 from '@/assets/images/homebg/homebg2_02.png'
import bgmd3 from '@/assets/images/homebg/homebg3_02.png'

import bgsm1 from '@/assets/images/homebg/homebg1_03.png'
import bgsm2 from '@/assets/images/homebg/homebg2_03.png'
import bgsm3 from '@/assets/images/homebg/homebg3_03.png'

import bglg1b from '@/assets/images/homebg/homebg1b_01.png'
import bglg2b from '@/assets/images/homebg/homebg2b_01.png'
import bglg3b from '@/assets/images/homebg/homebg3b_01.png'

import bgmd1b from '@/assets/images/homebg/homebg1b_02.png'
import bgmd2b from '@/assets/images/homebg/homebg2b_02.png'
import bgmd3b from '@/assets/images/homebg/homebg3b_02.png'

import bgsm1b from '@/assets/images/homebg/homebg1b_03.png'
import bgsm2b from '@/assets/images/homebg/homebg2b_03.png'
import bgsm3b from '@/assets/images/homebg/homebg3b_03.png'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default {

  // setup() {

  //   // 新聞
  //   const newsDatasStores = newsStores()
  //   const windowWidth = ref(window.innerWidth);
  //   const homeNewsDatas = ref([]);
  //   const filteredNewsDatas = async () => {
  //     await newsDatasStores.getNews();
  //     if (windowWidth.value < 768) {
  //       homeNewsDatas.value = newsDatasStores.newsDatas.slice(0, 2);

  //     }
  //     else {
  //       homeNewsDatas.value = newsDatasStores.newsDatas.slice(0, 3);

  //     }
  //   };



  //   let bgDatas = ref([]);

  //   // let bgTop = ref([]);

  //   const setDatasByScreenWidth = () => {
  //     // 根據不同的寬度設置 datas
  //     if (801 < windowWidth.value && windowWidth.value < 1300) {
  //       bgDatas.value = { bg1: bgmd1, bg2: bgmd2, bg3: bgmd3, bg1b: bgmd1b, bg2b: bgmd2b, bg3b: bgmd3b };
  //     }
  //     else if (windowWidth.value < 800) {
  //       bgDatas.value = { bg1: bgsm1, bg2: bgsm2, bg3: bgsm3, bg1b: bgsm1b, bg2b: bgsm2b, bg3b: bgsm3b };
  //       console.log('手機')
  //     }
  //     else {
  //       bgDatas.value = { bg1: bglg1, bg2: bglg2, bg3: bglg3, bg1b: bglg1b, bg2b: bglg2b, bg3b: bglg3b };
  //     }
  //   };



  //   onMounted(async () => {
  //     window.addEventListener('resize', () => {
  //       windowWidth.value = window.innerWidth;
  //       setDatasByScreenWidth()

  //       filteredNewsDatas(); // 在視窗大小改變時重新計算顯示的資料
  //     });
  //     setDatasByScreenWidth()

  //     await filteredNewsDatas();
  //   });




  //   let mm = gsap.matchMedia();
  //   let ctx = gsap.context(() => { });

  //   onMounted(() => {

  //     ctx.add(() => {
  //       gsap.fromTo(".logo", { scale: 0 }, { scale: 1 })
  //     })


  //     const homeTop = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".homeBanner",
  //         start: "top top",
  //         end: "15% top",
  //         // pin: true,
  //         scrub: true,
  //         // markers: true
  //       },
  //     })

  //     // const homeBg = gsap.utils.toArray(".homeBg");
  //     ctx.add(() => {
  //       homeTop.fromTo(
  //         ".homeBg",
  //         {
  //           opacity: 1,
  //           ease: "ease",
  //           zIndex: 10

  //         },
  //         {
  //           opacity: 0,
  //           zIndex: -99
  //         }
  //       ).fromTo(
  //         ".homeDownIcon",
  //         {
  //           opacity: 1,
  //           ease: "ease",

  //         },
  //         {
  //           opacity: 0,
  //         }, "<"
  //       )

  //     })

  //     // 手機
  //     mm.add('(max-width: 768px)', () => {
  //       homeTop.fromTo(
  //         ".logo",
  //         {
  //           width: "30%",
  //           // scale: 5,
  //           xPercent: "100",
  //           // x: "50wh",
  //           y: "50vh",
  //           // yPercent: "-50",
  //           duration: 0.5,

  //           ease: "ease",
  //         },
  //         {
  //           width: "140",
  //           x: "0vh",
  //           y: "1vh",
  //           opacity: 1,
  //           xPercent: "0",
  //           yPercent: "-50",
  //         }, '<')
  //     });

  //     // 平板以上
  //     mm.add('(min-width: 769px)', () => {
  //       homeTop.fromTo(
  //         ".logo",
  //         {
  //           width: "30%",
  //           // scale: 5,
  //           // xPercent: "-50",
  //           y: "50vh",
  //           // yPercent: "-50",
  //           duration: 0.5,

  //           ease: "ease",
  //         },
  //         {
  //           width: "140",
  //           y: "1vh",
  //           opacity: 1,
  //           yPercent: "-50",
  //         }, '<')
  //     })



  //   })


  //   onUnmounted(() => {

  //     mm.revert();
  //   });




  //   /////////////////////////////////////////////////////////////////////

  //   const mouseX = ref(0);
  //   const mouseY = ref(0);
  //   const bg1TranslateX = ref(0);
  //   const bg1TranslateY = ref(0);
  //   const bg2TranslateX = ref(0);
  //   const bg2TranslateY = ref(0);
  //   const bg3TranslateX = ref(0);
  //   const bg3TranslateY = ref(0);
  //   const homeDown = ref(0);
  //   // const topImage = ref(null);

  //   const gamma = ref(0)
  //   const beta = ref(0)
  //   const aplha = ref(0)

  //   const handleMouseMove = (event) => {
  //     // const navbar = document.querySelector('.navbar');
  //     if (scrollY > 5) {
  //       // navbar.style.backgroundColor = 'transparent';
  //       // bgTop.value = "opacity-0"
  //       return;
  //     }
  //     else if (event.gamma !== undefined ) {
  //       gamma.value = event.gamma;
  //       beta.value = event.beta;
  //       aplha.value = event.aplha;

  //       mouseX.value = event.gamma * 5; // gamma 可能是你需要的數據
  //       mouseY.value = event.beta * 5; // beta 可能是你需要的數據

  //       // 更新背景位置
  //       updateBackgroundPosition();
  //     }
  //     else {
  //       mouseX.value = event.clientX;
  //       mouseY.value = event.clientY;

        
  //       updateBackgroundPosition();
  //     }
  //     // bgTop.value = "opacity-1"


  //     // if (windowWidth.value < 900) {
  //     //   return
  //     //   // if (event && event.gamma !== undefined && event.beta !== undefined) {
  //     //   //   mouseX.value = event.gamma;
  //     //   //   mouseY.value = event.beta;
  //     //   //   alpha.value = event.gamma;
  //     //   //   beta.value = event.gamma;
  //     //   //   updateBackgroundPosition();
  //     //   // }
  //     // }
  //     // else {
  //     //   mouseX.value = event.clientX;
  //     //   mouseY.value = event.clientY;
  //     //   updateBackgroundPosition();

  //     // }




  //   };

  //   const updateBackgroundPosition = () => {
  //     const homebg = document.querySelector('.homeBg');
  //     if (homebg) {
  //       const homebgRect = homebg.getBoundingClientRect();
  //       bg1TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 100;
  //       bg1TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 100;

  //       bg2TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 50;
  //       bg2TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 50;

  //       bg3TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 30;
  //       bg3TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 20;
  //     }
  //   };



  //   const handleOrientationChange = (event) => {
  //     // 根據 event.alpha, event.beta, event.gamma 計算 mouseX 和 mouseY 的值
  //     // 這裡只是一個示例，實際情況需要根據你的需求調整
  //     gamma.value = event.gamma;
  //     beta.value = event.beta;
  //     aplha.value = event.aplha;

  //     mouseX.value = event.gamma * 10; // gamma 可能是你需要的數據
  //     mouseY.value = event.beta * 10; // beta 可能是你需要的數據

  //     // 更新背景位置
  //     updateBackgroundPosition();
  //   };

  //   // 監聽 DeviceOrientation 事件
  //   // const setupDeviceOrientation = () => {
  //   //   window.addEventListener('deviceorientation', handleOrientationChange);
  //   // };


  //   // const handleScroll = () => {
  //   //   // const top = document.querySelector('.top');

  //   //   const topBlocks = document.querySelectorAll('.homeBg');
  //   //   if (window.scrollY > 10) {
  //   //     topBlocks.forEach((block) => {
  //   //       block.style.opacity = '0';
  //   //     });
  //   //   } else {
  //   //     topBlocks.forEach((block) => {
  //   //       block.style.opacity = '1';
  //   //     });
  //   //   }
  //   // };

  //   onMounted(() => {
  //     window.addEventListener('deviceorientation', handleMouseMove);

  //     // setupDeviceOrientation();
  //     // window.addEventListener('scroll', handleScroll);
  //   });



  //   onUnmounted(() => {
  //     window.removeEventListener('deviceorientation', handleMouseMove);
  //     // window.removeEventListener('scroll', handleScroll);

  //   });


  //   /////////////////////////////////////////////////////////////////////


  //   return {
  //     mouseX,
  //     mouseY,

  //     bg1TranslateX,
  //     bg1TranslateY,
  //     bg2TranslateX,
  //     bg2TranslateY,
  //     bg3TranslateX,
  //     bg3TranslateY,

  //     bgDatas,
  //     // bgTop,
  //     homeDown,
  //     handleMouseMove,
  //     RouterLink,
  //     filteredNewsDatas,
  //     homeNewsDatas,

  //     gamma,
  //     aplha,
  //     beta

  //   };




  // },

}

</script>
