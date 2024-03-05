<template>
  <div>

    <!-- <div class="logo  z-50 ">
      <img src="https://assets-global.website-files.com/65155ce1ed06606be2f8e19b/6516d10fd81064515718f122_Groupe%203.svg"
        alt="">
    </div> -->

    <div @mousemove="handleMouseMove" @click="allowOrientation">

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


      <DownIcon class="DownIcon z-10 text-3xl absolute bottom-0 translate-x-1/2  right-1/2"></DownIcon>


    </div>


    <div class="">


      <div>


        <img class="fixed top-0 -z-10 " :src="bgDatas.bg1b" alt=""
          :style="{ transform: `translate(${bg3TranslateX}px, ${bg3TranslateY}px)` }" />
        <img class="fixed top-0 -z-10" :src="bgDatas.bg2b" alt=""
          :style="{ transform: `translate(${bg1TranslateX}px, ${bg1TranslateY}px)` }" />
        <img class="fixed top-0 -z-10 " :src="bgDatas.bg3b" alt=""
          :style="{ transform: `translate(${bg2TranslateX}px, ${bg2TranslateY}px)` }" />
      </div>







    </div>


    <!-- 新聞 -->

    <!-- <div>
      <div class="container news mx-auto absolute top-1/2 -translate-x-1/2 left-1/2">

        <div class="z-10 flex justify-between items-end">
          <div class="w-1/3 homeNewsLeft"><img src="../assets/images/titles/news.png" alt="" /></div>

          <div class="homeNewsRight md:w-1/3 w-1/3 md:absolute right-0  md:bottom-0 md:-mb-40">
            <RouterLink to="/news">
              <div class="md:w-1/2 w-2/3 relative md:translate-y-8 md:translate-x-20 translate-y-40 -translate-x-20">

                <img class="" src="../assets/images/dialog_1.png" alt="" />
                <p
                  class="absolute xl:text-xl md:text-base top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 whitespace-nowrap">
                  跟小滴一起<br>看更多消息
                </p>
              </div>
              <img class="" src="../assets/images/catking_4.png" alt="" />
            </RouterLink>
          </div>
        </div>

        <div class="grid md:grid-cols-4  grid-cols-2 gap-4 homeNewsLeft">
          <NewsComponent :datas="homeNewsDatas"></NewsComponent>

        </div>

      </div>
    </div> -->

    <!-- //// -->


    <div class="container news md:mx-auto md:mb-[800px] mb-96 relative -mt-96  max-sm:px-5">

      <div class=" flex justify-between items-end">
        <div class="w-1/3  homeNewsLeft"><img src="../assets/images/titles/news.png" alt="" /></div>


        <div class=" md:w-1/3 w-1/3 md:absolute right-0  md:bottom-0 md:-mb-40 homeNewsRight">
          <RouterLink to="/news">
            <div class="md:w-1/2 w-2/3 relative md:translate-y-8 md:translate-x-20 translate-y-32 -translate-x-20">

              <img class="" src="../assets/images/dialog_1.png" alt="" />
              <p
                class="absolute xl:text-xl md:text-base top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 whitespace-nowrap">
                跟小滴一起<br>看更多消息
              </p>
            </div>
            <img class="" src="../assets/images/catking_4.png" alt="" />
          </RouterLink>
        </div>

      </div>
      <div class="grid md:grid-cols-4  grid-cols-2 gap-4 homeNewsInfo">
        <NewsComponent :datas="homeNewsDatas"></NewsComponent>

      </div>

    </div>


    <!-- 動畫 -->
    <div class="transform rotate-[-10deg] mb-40  mt-[35%]">
      <div class="container mx-auto relative z-40 ">
        <img class="animation-wrapper from-down absolute md:w-2/5 w-3/5 left-10 lg:-bottom-60 -bottom-10"
          src="../assets/images/catking_2.png" alt="" />

        <div class="animation-wrapper from-right w-1/3 absolute md:bottom-0 bottom-10 right-0">
          <img src="../assets/images/titles/animation.png" alt="" />
        </div>
      </div>

      <div class="relative ">
        <div class=" overflow-hidden bg-yellow-700 lg:py-40 py-20 space-y-3 scale-125">
          <PawIcon class="fill-white  md:w-1/4 w-1/2 md:right-1/2 md:-bottom-40 right-30 -bottom-20 absolute ">
          </PawIcon>
          <PawIcon class="fill-white    md:w-1/4 w-1/2 md:right-96 md:-top-60 right-20 -top-20 absolute"
            style="transform: rotateY(180deg);">
          </PawIcon>
          <HomeAnimation></HomeAnimation>
        </div>
        <div class=" w-full h-full absolute top-0 scale-125 -z-50">
          <div>
            <PawIcon class="fill-yellow-700  md:w-1/4 w-1/2 md:right-96 md:-top-60 right-20 -top-20 absolute"
              style="transform: rotateY(180deg);">
            </PawIcon>

            <PawIcon class="fill-yellow-700 md:w-1/4 w-1/2 md:right-1/2 md:-bottom-40 right-30 -bottom-20 absolute ">
            </PawIcon>
          </div>
        </div>

      </div>
    </div>

    <!-- 遊戲-->

    <div class="container md:mx-auto relative  max-md:px-5">
      <div class="flex md:justify-between items-end justify-center py-5">
        <div class="w-1/3"><img src="../assets/images/titles/game.png" alt="" /></div>
        <div class="w-1/3 hidden md:block"><img src="../assets/images/sakura_3.png" alt="" /></div>
      </div>
      <div class=" flex items-center md:flex-row flex-col">
        <div class="md:w-2/3 w-full md:mr-6"><img src="../assets/images/game1.jpg" alt="" /></div>
        <div class="max-sm:py-5 ">
          <h2 class="max-sm:text-center">♦《女神試煉》♦</h2>
          <div>
            <p>
              喵女神發現了一顆代表著力量的亞威寶石 於是指示九藏等人前去調查
              但一行人發現寶石鑲嵌在遺跡石碑上 就算是雷邇的創造大錘也束手無策...
            </p>
            <a href=""></a>
          </div>
        </div>
      </div>
      <div class=" flex items-center md:flex-row flex-col-reverse">
        <div class="max-sm:py-5">
          <h2 class=" max-sm:text-center">♦《集合喵喵》♦</h2>
          <div>
            <p>
              喵女神發現了一顆代表著力量的亞威寶石 於是指示九藏等人前去調查
              但一行人發現寶石鑲嵌在遺跡石碑上 就算是雷邇的創造大錘也束手無策...
            </p>
            <a href=""></a>
          </div>
        </div>
        <div class="md:w-2/3 w-full"><img src="../assets/images/game2.png" alt="" /></div>
      </div>
    </div>

    <!-- 連結-->
    <div class="container mx-auto relative  max-sm:px-5">
      <div class="w-1/3 mx-auto py-5"><img src="../assets/images/titles/more.png" alt="" /></div>

      <ul class=" p-5 grid md:grid-cols-4 gap-20 grid-cols-2">
        <li class="h-full relative">
          <img class="absolute top-1/2 -translate-y-1/2" src="../assets/images/logo2.jpg" alt="">
          <p class="text-lg text-center absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">臉書粉絲團</p>
        </li>
        <li class="h-full">
          <img src="../assets/images/fbicon.png" alt="">
          <p class="text-lg text-center">臉書粉絲團</p>
        </li>
        <li class="h-full">
          <img src="../assets/images/fbicon.png" alt="">
          <p class="text-lg text-center">臉書粉絲團</p>
        </li>
        <li class="h-full relative">
          <img class="absolute top-1/2 -translate-y-1/2" src="../assets/images/logo2.jpg" alt="">
          <p class="text-lg text-center absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">臉書粉絲團</p>
        </li>
      </ul>

    </div>

  </div>
</template>

<style lang="scss">
// .section5 {
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   position: relative;
//   height: 100vh;
//   background: #f5f5f5;
// }

// .section5>img {
//   box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
//     0 8px 10px -6px rgb(0 0 0 / 0.1);
// }

// .homeBg {
//   opacity: 1;
//   transition: opacity 0.5s ease;

// }

// .logo {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   // z-index: -1;
//   transform: translate(-50%, -50%);


// }
</style>


<script >
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap, ScrollTrigger, TextPlugin } from 'gsap/all'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { TextPlugin } from 'gsap/TextPlugin'
import HomeAnimation from '@/components/HomeAnimation.vue'
import PawIcon from '../components/icon/PawIcon.vue'

import NewsComponent from '../components/NewsComponent.vue'
// import { storeToRefs } from 'pinia';
import newsStores from "@/stores/allStore";

import DownIcon from '../components/icon/DownIcon.vue'


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

  setup() {

    // 新聞
    const newsDatasStores = newsStores()
    const windowWidth = ref(window.innerWidth);
    const homeNewsDatas = ref([]);
    const filteredNewsDatas = async () => {
      await newsDatasStores.getNews();
      if (windowWidth.value < 768) {
        homeNewsDatas.value = newsDatasStores.newsDatas.slice(0, 2);

      }
      else {
        homeNewsDatas.value = newsDatasStores.newsDatas.slice(0, 3);

      }
    };



    let bgDatas = ref([]);

    // let bgTop = ref([]);

    const setDatasByScreenWidth = () => {
      // 根據不同的寬度設置 datas
      if (801 < windowWidth.value && windowWidth.value < 1300) {
        bgDatas.value = { bg1: bgmd1, bg2: bgmd2, bg3: bgmd3, bg1b: bgmd1b, bg2b: bgmd2b, bg3b: bgmd3b };
      }
      else if (windowWidth.value < 800) {
        bgDatas.value = { bg1: bgsm1, bg2: bgsm2, bg3: bgsm3, bg1b: bgsm1b, bg2b: bgsm2b, bg3b: bgsm3b };
      }
      else {
        bgDatas.value = { bg1: bglg1, bg2: bglg2, bg3: bglg3, bg1b: bglg1b, bg2b: bglg2b, bg3b: bglg3b };
      }
    };



    onMounted(async () => {
      window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
        setDatasByScreenWidth()

        filteredNewsDatas(); // 在視窗大小改變時重新計算顯示的資料
      });
      setDatasByScreenWidth()

      await filteredNewsDatas();
    });




    let mm = gsap.matchMedia();
    let ctx = gsap.context(() => { });

    onMounted(() => {

      // VanillaTilt.init(document.querySelectorAll(".image1"), {
      //   max: 25,
      //   scale: 1.1,
      //   speed: 1000,
      // });
      // VanillaTilt.init(document.querySelector(".image2"), {
      //   max: 25,
      //   scale: 1.1,
      //   speed: 1000,
      // });
      // VanillaTilt.init(document.querySelector(".image3"), {
      //   max: 25,
      //   scale: 1.1,
      //   speed: 1000,
      // });
      // let ctx = gsap.context(() => { });

      // ctx.add(() => {
      //   text = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".homeBanner",

      //       start: "top top",
      //       end: "30% top",
      //       pin: true,
      //       scrub: true,
      //       markers: true
      //     },
      //   })
      // });


      // ctx.add(() => {
      //   gsap.fromTo(".logo", { scale: 0 }, { scale: 1 })
      // })


      const homeTop = gsap.timeline({
        scrollTrigger: {
          trigger: ".homeBanner",
          start: "top top",
          end: "15% top",
          // pin: true,
          scrub: true,
          // markers: true
        },
      })

      // const homeBg = gsap.utils.toArray(".homeBg");
      ctx.add(() => {
        homeTop.fromTo(
          ".homeBg",
          {
            opacity: 1,
            ease: "ease",
            zIndex: 10

          },
          {
            opacity: 0,
            zIndex: -99
          }
        ).fromTo(
          ".DownIcon",
          {
            opacity: 1,
            ease: "ease",

          },
          {
            opacity: 0,
          }, "<"
        )

      })

      // gsap.set(".newsInfoCard", {
      //   xPercent: -10,
      //   yPercent: -50,
      //   // height:'100%',
      //   zIndex: 999,
      //   // pin: true,

      // })
      // 手機
      mm.add('(max-width: 768px)', () => {
        gsap.fromTo(".logo", { scale: 0 }, { scale: 3 })
        homeTop.fromTo(
          ".logo",
          {
            width: "30%",
            xPercent: "100",
            // x: "50wh",
            y: "40vh",
            // yPercent: "-50",
            duration: 0.5,

            ease: "ease",
          },
          {
            width: "140",
            scale: 1,

            x: "0vh",
            y: "5vh",
            opacity: 1,
            xPercent: "0",
            yPercent: "-50",
          }, '<')
      });

      // 平板以上
      mm.add('(min-width: 769px)', () => {
        gsap.fromTo(".logo", { scale: 0 }, { scale: 1 })
        homeTop.fromTo(
          ".logo",
          {
            width: "30%",
            // scale: 5,
            // xPercent: "-50",
            y: "40vh",
            // yPercent: "-50",
            duration: 0.5,

            ease: "ease",
          },
          {
            width: "140",
            y: "4vh",
            opacity: 1,
            yPercent: "-50",
          }, '<')
      })

      const columns = gsap.utils.toArray(".homeNewsLeft");

      ctx.add(() => {
        homeTop.fromTo(
          columns,
          {
            opacity: 0,

            ease: "ease",
            xPercent: -300

          },
          {
            opacity: 1,

            xPercent: 0

          }
        ).fromTo(
          ".homeNewsRight",
          {

            ease: "power1.in",
            xPercent: 250

          },
          {
            xPercent: 0

          }
        )
          .fromTo(".homeNewsInfo", {
            // ease: "power1.in",
            opacity: 0,
          },
            {
              opacity: 1,

            })




      })

    })


    onUnmounted(() => {

      mm.revert();

      ctx.revert();
    });

    // onMounted(() => {
    //   ctx = gsap.context(() => {
    //     gsap.timeline({
    //       scrollTrigger: {
    //         trigger: ".homeBanner",

    //         start: "top top",
    //         end: "30% top",
    //         pin: true,
    //         scrub: true,
    //         markers: true
    //       },
    //     })
    //       .fromTo(
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
    //           y: "0vh",
    //           opacity: 1,
    //           yPercent: "-50",
    //         })
    //       .fromTo(
    //         ".homeBg",
    //         {

    //           opacity: 1,
    //           ease: "ease",
    //           // duration: 0,

    //         },
    //         {

    //           opacity: 0,

    //         }, '<'
    //       )
    //       // .fromTo(
    //       //   ".homeBg2",
    //       //   {

    //       //     opacity: 0,
    //       //     ease: "ease",
    //       //     // duration: 0,

    //       //   },
    //       //   {

    //       //     opacity: 1,

    //       //   }, '<'
    //       // ).set(".homeBg2", { position: "fixed", top: 0, left: 0, width: "100%", height: "100%" });
    //       // 固定 .homeBg2 元素
    //       ;


    //     // gsap.timeline({
    //     //   scrollTrigger: {
    //     //     trigger: ".homeBanner",
    //     //     // trigger element - viewport
    //     //     start: "top top",
    //     //     end: "bottom top",
    //     //     pin: true,
    //     //     scrub: true,
    //     //     markers: true
    //     //   },
    //     // }).fromTo(
    //     //   ".homeBg",
    //     //   {

    //     //     opacity: 1,
    //     //     ease: "ease",
    //     //     // duration: 0,

    //     //   },
    //     //   {

    //     //     opacity: 0,

    //     //   },
    //     // );


    //   });
    // });



    /////////////////////////////////////////////////////////////////////


    function hide(element) {
      gsap.set(element, { opacity: 0, visibility: "hidden" });
    }

    function animatedX(element) {
      let x = 0;

      //依照條件設定x初始值
      if (element.classList.contains("from-left")) {
        x = -100;
      } else if (element.classList.contains("from-right")) {
        x = 100;
      }

      //設定元素初始值
      element.style.transform = `translate(${x}px, 0px)`;
      gsap.fromTo(
        element,
        { x: x, y: 0, opacity: 0, visibility: "hidden" },
        {
          duration: 1,
          delay: 0.2,
          x: 0,
          y: 0,
          visibility: "visible",
          opacity: "1",
          ease: "expo",
          overwrite: "auto",
        }
      );
    }

    function animatedY(element) {
      let y = 0;

      //依照條件設定y初始值
      if (element.classList.contains("from-up")) {
        y = -100;
      } else if (element.classList.contains("from-down")) {
        y = 100;
      }

      //設定元素初始值
      element.style.transform = `translate(0px, ${y}px)`;
      gsap.fromTo(
        element,
        { x: 0, y: y, opacity: 0, visibility: "hidden" },
        {
          duration: 1,
          delay: 0.2,
          x: 0,
          y: 0,
          visibility: "visible",
          opacity: "1",
          ease: "expo",
          overwrite: "auto",
        }
      );
    }

    onMounted(() => {

      gsap.utils.toArray(".animation-wrapper").forEach(element => {
        if (
          element.classList.contains("from-left") ||
          element.classList.contains("from-right")
        ) {
          hide(element);
          ScrollTrigger.create({
            trigger: element,
            // start: "-30% top",
            // end: "bottom top",
            // scrub: true,
            // markers: true,
            // markers: true,
            onEnter: function () {
              animatedX(element);
            },
            onEnterBack: function () {
              animatedX(element);
            },
            onLeave: function () {
              hide(element);
            },
          });
        } else if (element.classList.contains("from-up") ||
          element.classList.contains("from-down")) {
          hide(element);
          ScrollTrigger.create({
            trigger: element,

            // markers: true,
            onEnter: function () {
              animatedY(element);
            },
            onEnterBack: function () {
              animatedY(element);
            },
            onLeave: function () {
              hide(element);
            },
          });
        }
      })

    });


    /////////////////////////////////////////////////////////////////////

    const mouseX = ref(0);
    const mouseY = ref(0);
    const bg1TranslateX = ref(0);
    const bg1TranslateY = ref(0);
    const bg2TranslateX = ref(0);
    const bg2TranslateY = ref(0);
    const bg3TranslateX = ref(0);
    const bg3TranslateY = ref(0);
    const homeDown = ref(0);
    // const topImage = ref(null);

    const handleMouseMove = (event) => {
      if (scrollY > 5) {
        return;
      }
      else if (event.gamma !== undefined) {

        mouseX.value = event.gamma * 5;
        mouseY.value = event.beta * 5;

        // 更新背景位置
        updateBackgroundPosition();
      }
      else {
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;


        updateBackgroundPosition();
      }
    };

    const updateBackgroundPosition = () => {
      const homebg = document.querySelector('.homeBg');
      if (homebg) {
        const homebgRect = homebg.getBoundingClientRect();
        bg1TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 100;
        bg1TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 100;

        bg2TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 50;
        bg2TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 50;

        bg3TranslateX.value = ((mouseX.value - homebgRect.left) / homebgRect.width - 0.5) * 30;
        bg3TranslateY.value = ((mouseY.value - homebgRect.top) / homebgRect.height - 0.5) * 20;
      }
    };


    const allowOrientation = async () => {
      let flag;
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        console.log('有成功')
        try {
          await DeviceOrientationEvent.requestPermission().then((permissionState) => {
            flag = permissionState === 'granted';
          });
        } catch (e) {
          flag = false;
          console.log('e')
        }
      } else {
        flag = true;
      }
      if (!flag) alert('無法使用陀螺儀');

      // 移除點擊事件監聽器
      // document.body.removeEventListener('click', allowOrientation);
    };



    onMounted(() => {
      window.addEventListener('deviceorientation', handleMouseMove);

      // document.body.addEventListener('click', allowOrientation);

    });

    onUnmounted(() => {
      window.removeEventListener('deviceorientation', handleMouseMove);

      // document.body.removeEventListener('click', allowOrientation);
    });

    // const handleScroll = () => {
    //   // const top = document.querySelector('.top');

    //   const topBlocks = document.querySelectorAll('.homeBg');
    //   if (window.scrollY > 10) {
    //     topBlocks.forEach((block) => {
    //       block.style.opacity = '0';
    //     });
    //   } else {
    //     topBlocks.forEach((block) => {
    //       block.style.opacity = '1';
    //     });
    //   }
    // };

    // onMounted(() => {
    //   window.addEventListener('scroll', handleScroll);
    // });



    // onUnmounted(() => {
    //   window.removeEventListener('scroll', handleScroll);

    // });


    /////////////////////////////////////////////////////////////////////


    return {
      mouseX,
      mouseY,

      bg1TranslateX,
      bg1TranslateY,
      bg2TranslateX,
      bg2TranslateY,
      bg3TranslateX,
      bg3TranslateY,

      bgDatas,
      // bgTop,
      homeDown,
      handleMouseMove,
      RouterLink,
      filteredNewsDatas,
      homeNewsDatas,

      allowOrientation,
      
    };




  },
  components: {
    HomeAnimation,
    NewsComponent,
    PawIcon,
    DownIcon
  },
}

</script>
