<template>
  <div class=" relative">
    <div class="wrapper relative">
      <div class="column h-full w-full left">

        <!-- 王國 -->
        <!-- <div class="h-full  element flex items-center justify-start  king">
          <div class="translate-y-36 translate-x-72 title" ref="title0">
            <img class="" src="../../assets/images/title.png" alt="">
          </div>
        </div> -->
        <!-- 櫻花 -->
        <!-- <div class=" h-full  element flex items-center justify-start  sakura">
          <div class="translate-y-36 translate-x-72 title" ref="title1">
            <img class="" src="../../assets/images/title.png" alt="">
          </div>
        </div> -->
        <!-- 魔界 -->
        <!-- <div class="h-full  element flex items-center justify-start devi">
          <div class="translate-y-36 translate-x-72 title"  ref="title1">
            <img class="" src="../../assets/images/title.png" alt="">
          </div>
        </div> -->

        <div v-for="(data, i) in datas" :key="'title' + i" class="h-full element flex items-center justify-start"
          :class="data.class">

          <div
            class="xl:translate-y-1/2 lg:translate-y-1/2 translate-y-20 xl:translate-x-72   translate-x-1/2 h-full lg:w-1/4 w-1/2"
            :ref="(el) => { areaTitle[i] = el }">
            <RouterLink to="/roles">
              <img class="" :src="data.title" alt="image">
            </RouterLink>
          </div>
        </div>


      </div>

      <div class="column absolute w-2/3 h-full right-0">

        <!-- 魔界 -->
        <div class="h-full element relative">
          <div class="absolute right-20  md:bottom-0 bottom-32 ">

            <div class=" md:w-1/2 w-3/4 -top-52 md:top-10  -left-10 md:-left-48 lg:-left-52  absolute">

              <img class=" relative lg:scale-100 md:scale-125 scale-150 " src="../../assets/images/dialog_1.svg" alt="">
              <p class="absolute lg:top-14 top-3 md:left-14 lg:text-lg text-sm leading-7  lg:w-2/3 md:w-3/4 w-full">
                喵魔帝-帝雷的管理地。

                螢火環繞著永夜，充滿奇幻魔法的地方。在

                魔界之森的中心矗立著一座堡壘，

                居住著充滿野性的喵喵們，

                周圍也有各種奇異的生物。</p>






            </div>


            <!-- <div class="bg-white text-4xl">
              <div class=" hidden xl:block ">xl</div>

              <div class=" hidden lg:block ">lg</div>
              <div class=" hidden md:block ">md</div>
              <div class="">sm</div>


            </div> -->


            <img src="../../assets/images/area/catdevil_0.png" alt="">
          </div>

        </div>

        <!-- 櫻花 -->
        <div class="h-full element relative">
          <div class="absolute right-20  md:bottom-0 bottom-32 ">

            <div class=" md:w-1/2 w-3/4 -top-52 md:top-10  -left-10 md:-left-48 lg:-left-52  absolute">

              <img class=" relative lg:scale-100 md:scale-125 scale-150 " src="../../assets/images/dialog_1.svg" alt="">
              <p class="absolute lg:top-14 top-3 md:left-14 lg:text-lg text-sm leading-7  lg:w-2/3 md:w-3/4 w-full">
                櫻花村長-晴信的管理地。

                常年盛開櫻花，充滿著花香及大片草地。

                是個擁有豐富的地形及動植物的地方。</p>

            </div>



            <!-- <div class="bg-white text-4xl">
              <div class=" hidden xl:block ">xl</div>

              <div class=" hidden lg:block ">lg</div>
              <div class=" hidden md:block ">md</div>
              <div class="">sm</div>


            </div> -->


            <img class="" src="../../assets/images/area/sakura_0.png" alt="">
          </div>
        </div>

        <!-- 王國 -->

        <div class="h-full element relative">
          <div class="absolute right-20  md:bottom-20 bottom-32 ">


            <div class=" md:w-1/2 w-3/4 -top-52 md:top-10  -left-10 md:-left-48 lg:-left-52  absolute">

              <img class=" relative lg:scale-100 md:scale-125 scale-150 " src="../../assets/images/dialog_1.svg" alt="">
              <p
                class="absolute lg:top-14 top-3 lg:left-14 md:left-10 lg:text-lg text-sm leading-7  lg:w-2/3 md:w-3/4 w-full">
                喵國王-九藏的管理地，
                也是第一季動畫中的主要場景。
                以石頭堆砌而成的城堡街道，
                圍繞著大自然樹木，
                是喵喵們喜歡的居住地之一。</p>
              <div class=" ">


                <!-- <div class=" hidden lg:block text-lg"> 喵國王-九藏的管理1，
                  也是第一季<br>動畫中的主要場景。
                  以石頭堆砌而成的城堡街道，
                  圍繞著大自然樹木，<br>
                  是喵喵們喜歡的居住地之一。<br></div> -->

                <!-- <div class=" hidden  max-lg:block "> 喵國王-九藏的管理2，
                  也是第一季<br>動畫中的主要場景。
                  以石頭堆砌而成的城堡街道，
                  圍繞著大自然樹木，<br>
                  是喵喵們喜歡的居住地之一。<br></div> -->
                <!-- <div class=" text-sm md:text-base"> 喵國王-九藏的管理，<br>
                  也是第一季動畫中的主要場景。
                  以石頭堆砌而成的城堡街道，
                  圍繞著大自然樹木，<br>
                  是喵喵們喜歡的居住地之<br>一。</div> -->
                <!-- <div class="">sm</div> -->

              </div>

              <!-- <div class="bg-white text-4xl">
                <div class=" hidden xl:block ">xl</div>

                <div class=" hidden lg:block ">lg</div>
                <div class=" hidden md:block ">md</div>
                <div class="">sm</div>


              </div> -->


            </div>
            <RouterLink to="/roles">
              <img class="max-sm:scale-125" src="../../assets/images/area/catking_0.png" alt="">
            </RouterLink>
          </div>

        </div>

      </div>

      <DownIcon class="DownIcon z-10 text-3xl absolute bottom-0 translate-x-1/2  right-1/2" v-show="currentSection === 0">
      </DownIcon>


    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'

import { gsap, ScrollTrigger, Observer } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

import king from '@/assets/images/area/area_king.png'
import sakura from '@/assets/images/area/area_sakura.png'
import devi from '@/assets/images/area/area_devi.png'
import DownIcon from '@/components/icon/DownIcon.vue'
export default {

  setup() {

    let areaTitle = ref([])
    let datas = ref([
      { title: king, class: 'king' },
      { title: sakura, class: 'sakura' },
      { title: devi, class: 'devi' }
    ]);

    let ctx;
    let currentSection = ref(0);

    onMounted(() => {
      // console.log(areaTitle.value)
      ctx = gsap.context(() => {

        gsap.set(areaTitle.value, { xPercent: -100, opacity: 0 });
        gsap.to(areaTitle.value[0], { xPercent: 0, opacity: 1, duration: 1 });

        let isTweening = false;
        let amount = 0;
        let base = 0;
        const columns = gsap.utils.toArray(".column");



        //col計算有幾個columns，i索引
        columns.forEach((col, i) => {
          const els = gsap.utils.toArray(".element", col);

          amount = els.length;
          base = 100 * (amount - 1);
          if (i) {
            gsap.set(col, {
              yPercent: -base
            });
          }
        });

        const goToSection = (e) => {
          // console.log(e.deltaY, isTweening);
          if (isTweening) return;
          let areaValue;

          if (e.deltaY > 0 && currentSection.value < amount - 1) {
            isTweening = true;
            currentSection.value++;
            console.log(currentSection.value)

            areaValue = 100 * currentSection.value;

            gsap.timeline()
              .to(columns, {
                yPercent: (i) => (i < 1 ? -areaValue : areaValue - base),
                duration: 1.5,
              }).fromTo(
                areaTitle.value[currentSection.value],
                { xPercent: -100, opacity: 0 },
                {
                  xPercent: 0,
                  opacity: 1,
                  duration: 2,
                  onComplete: () => (isTweening = false),
                }, '<'
              );

            // gsap.to(columns, {
            //   yPercent: (i) => (i < 1 ? -value : value - base),
            //   duration: 1.5,
            //   onComplete: () => (isTweening = false)
            // })





          } else if (e.deltaY < 0 && currentSection.value > 0) {
            isTweening = true;
            currentSection.value--;
            console.log(currentSection.value)

            areaValue = 100 * currentSection.value;
            gsap.timeline()
              .to(columns, {
                yPercent: (i) => (i < 1 ? -areaValue : areaValue - base),
                duration: 1.5,
              }).fromTo(
                areaTitle.value[currentSection.value],
                { xPercent: -100, opacity: 0 },
                {
                  xPercent: 0,
                  opacity: 1,
                  duration: 2,
                  onComplete: () => (isTweening = false),
                }, '<'
              );

          }
        };


        // const goToSection = (e) => {
        //   // console.log(e.deltaY, isTweening);
        //   if (isTweening) return;
        //   let value;
        //   if (e.deltaY > 0) {
        //     isTweening = true;
        //     currentSection = wrap(currentSection + 1);
        //     console.log(currentSection)

        //     value = 100 * currentSection;
        //     gsap.to(columns, {
        //       yPercent: (i) => (i < 1 ? -value : value - base),
        //       duration: 1.5,
        //       onComplete: () => {isTweening = false;}
        //     });

        //   } else if (e.deltaY < 0) {
        //     isTweening = true;
        //     currentSection = wrap(currentSection - 1);
        //     value = 100 * currentSection;
        //     gsap.to(columns, {
        //       yPercent: (i) => (i < 1 ? -value : value - base),
        //       duration: 1.5,
        //       onComplete: () => (isTweening = false)
        //     });
        //   }
        // };

        Observer.create({
          target: ".wrapper",
          type: "wheel,touch",
          // tolerance: 10,
          preventDefault: true,
          onChangeY: goToSection
        });


      })




    });

    onUnmounted(() => {
      ctx.revert();
      // ScrollTrigger.killAll();
    });

    return {
      datas,
      king,
      sakura,
      devi,
      areaTitle,
      currentSection
    }

  },

  components: {

    DownIcon
  },
};
</script>


<style>
.wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.king {
  background: url(@/assets/images/area/meow_bg1.jpg) no-repeat center /cover;
}

.sakura {
  background: url(@/assets/images/area/meow_bg2.jpg) no-repeat center /cover;
}

.devi {
  background: url(@/assets/images/area/meow_bg3.jpg) no-repeat center /cover;
}
</style>
