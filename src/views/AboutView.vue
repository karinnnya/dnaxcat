<template>
  <div class="w-full md:h-screen flex justify-center">
    <div class="container mx-auto p-8 flex flex-col justify-center items-center">
      <!-- <img class="w-1/3" src="@/assets/images/title.png" alt=""> -->

      <p class="text-3xl font-medium">台灣的原創品牌─九藏喵窩</p>
      <img class="w-full" src="@/assets/images/about/s1.jpg" alt="">

    </div>
  </div>
  <div class="vertical-section w-full h-screen overflow-hidden flex  text-lg" id="sectionOne">
    <div class="w-1/2 h-screen flex flex-col justify-center items-center p-8">
      <img src="@/assets/images/about/about_1.png" alt="">
    </div>
    <div class="w-1/2 md:p-20 md:text-xl p-10 text-base leading-loose">
      <div class="large-child">
        <p class="mb-4 ">
          「九藏喵窩」於西元1998年在台灣誕生，為台灣本土知名動畫品牌，永遠都是白目眼的可愛喵咪就是本品牌的特色。創辦人-陳仲君，初期成立喵窩網路論壇，藉由論壇的人氣，逐漸從獨立開發線上遊戲到發行周邊產品。西元2007年後決定品牌化，2012年正式創立九藏喵窩有限公司，努力推廣喵窩品牌。期間陸續推出繪本、文具、公仔玩偶、陶瓷杯墊...等產品。因其親和快樂形象，獲選為台北地下街、法務部、教育部、國語日報等合作對象。西元2013年更推出「九藏喵窩」原創動畫喵王國。
        </p>
        <p class="mb-4">「九藏喵窩」的創始人陳仲君被稱為是「喵國王-九藏」，帶領著大家建立了喵咪的國度。
          最早，還是少年的九藏創立了遊戲論壇(九藏喵窩)，秉持著免費無廣告的環境，但隨著論壇會員與流量增加，網站租用費難以維持，也婉拒會員們的捐款。直到會員提議...開始把「九藏」的喵形象設計出來，製作網站的吉祥物等周邊販售。</p>
        <p class="mb-4">後來喵窩會員都自行設定了自己的喵角色，成了喵窩論壇的特色。
          後來各個喵會員們也逐漸被形象化，出現在周邊上。
          每隻喵都反應了會員的個性與故事，喵窩的世界，就是喵喵們互動間自然而然，一點一滴匯集而成。</p>
      </div>
    </div>
  </div>
  <div class="vertical-section w-full h-screen overflow-hidden flex  text-lg" id="sectionTwo">
    <div class="w-1/2  md:p-20 md:text-xl p-10 leading-loose">
      <div class="large-child">

        <p class="mb-4">慢慢的，喵窩論壇發展了自己的商業模式，品牌化並打出了知名度。
          九藏喵窩也開始跨足領域，像自行開發線上遊戲「勇者喵傳說」。
          嘗試結合各異業，合作製作多元產品，把握機會參與各類型活動。</p>
        <p class="mb-4">過程中，九藏喵窩更秉持新一代創業家的精神，致力於網路上發掘並培養素人，像繪師、動畫配音員、喵窩歌手...等。</p>

      </div>
    </div>
    <div class="w-1/2 h-screen flex flex-col justify-center items-center">
      <img class="h-full" src="@/assets/images/about/about_2.jpg" alt="">
    </div>
  </div>
  <section class="w-full mt-40 flex  flex-col justify-center items-center px-4 py-2">
    <h2 class="md:text-2xl text-xl text-center  mb-12">喵窩以身為台灣本土品牌為豪，與支持我們的喵喵們共同努力，<br>
      一同歡笑揮灑汗水不斷邁進目標，也歡迎你一起進入喵的世界。</h2>

    <img class="w-3/4" src="@/assets/images/about/about_3.png" alt="">
  </section>
</template>


<script>
import { onMounted, onUnmounted } from 'vue';
// import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap/all";

// import { Observer } from "gsap/Observer";
// gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {

    let ctx;

    onMounted(() => {

      ctx = gsap.context(() => {

        const sections = gsap.utils.toArray(".vertical-section");

        sections.forEach((section) => {
          const large = section.querySelector(".large-child");

          if (large.offsetHeight > window.innerHeight - 64) {
            gsap.to(large, {
              y: () => (window.innerHeight - large.clientHeight - 150),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top top",
                end: () => "+=" + (large.offsetHeight - window.innerHeight),
                scrub: 0.5,
                invalidateOnRefresh: true,
              }
            });
          }
        });

      })


    });

    onUnmounted(() => {
      ctx.revert(); // <- Easy Cleanup!
      ScrollTrigger.killAll();
    });


    // }

  }
};
</script>

<style ></style>