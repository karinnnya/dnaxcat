<template>
  <div class=" mb-12">
    <ul class="flex gap-4">
      <!-- <li class="MemberGallery__listitem" v-for="(imgSrc, index) in imageSources" :key="index">
        <img :src="imgSrc" alt="" />
      </li> -->
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (1).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (2).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (3).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (4).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (5).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (6).jpg" alt="" /></li>
      <li class="MemberGallery__listitem"><img src="../assets/images/animations/up (7).jpg" alt="" /></li>
    </ul>
  </div>

  <div class="   ">
    <ul class="flex gap-4">
      <!-- <li class="MemberGallery__listitem--reverse" v-for="(imgSrc, index) in imageSources" :key="index + 1">
        <img :src="imgSrc" alt="" />
      </li> -->
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (1).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (2).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (3).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (4).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (5).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (6).jpg" alt="" /></li>
      <li class="MemberGallery__listitem--reverse"><img src="../assets/images/animations/down (7).jpg" alt="" /></li>
    </ul>
  </div>
</template>

  

<style lang="scss">
// .MemberGallery {
//   overflow: hidden;
//   width: 100%;
// }

.MemberGallery__listitem,
.MemberGallery__listitem--reverse {
  width: 50%;
  // overflow: hidden;
  flex-shrink: 0;
  // border: 1px solid red;

  @media (min-width: 960px) {
    width: 33.333%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
}

// .MemberGallery__list {
//   width: 100%;
//   display: flex;
//   gap: 16px;

//   @media (min-width: 769px) {
//     gap: 24px;
//   }
// }
</style>
  
<script>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

export default {
  setup() {
    // const imageSources = [
    //   '../assets/images/703313796573.jpg',
    //   'https://picsum.photos/300/420?random=2',
    //   'https://picsum.photos/300/420?random=3',
    //   'https://picsum.photos/300/420?random=4',
    //   'https://picsum.photos/300/420?random=5',
    //   'https://picsum.photos/300/420?random=6',

    // ];

    // const galleryList = ref(null);
    // const galleryListReverse = ref(null);

    // onMounted(() => {
    //   let mm = gsap.matchMedia();

    //   mm.add('(max-width: 768px)', () => {
    //     horizontalLoop(".MemberGallery__listitem", {
    //       speed: 1.5,
    //       repeat: -1,
    //       paddingRight: 16,
    //     });

    //     horizontalLoop(".MemberGallery__listitem--reverse", {
    //       speed: 1.5,
    //       repeat: -1,
    //       paddingRight: 16,
    //       reversed: true,
    //     });

    //     // return () => {
    //     //   gsap.set(".MemberGallery__listitem--reverse", {
    //     //     clearProps: 'all',
    //     //   });
    //     // };
    //   });

    //   mm.add('(min-width: 769px)', () => {
    //     horizontalLoop(".MemberGallery__listitem", {
    //       speed: 1.5,
    //       repeat: -1,
    //       paddingRight: 24,
    //     });

    //     horizontalLoop(".MemberGallery__listitem--reverse", {
    //       speed: 1.5,
    //       repeat: -1,
    //       paddingRight: 24,
    //       reversed: true,
    //     });

    //     // return () => {
    //     //   gsap.set(".MemberGallery__listitem--reverse", {
    //     //     clearProps: 'all',
    //     //   });
    //     // };
    //   });
    // });
    let anime;
    onMounted(() => {
      anime = gsap.context(() => {
        horizontalLoop(".MemberGallery__listitem", {
          speed: 1.5,
          repeat: -1,
          paddingRight: 16,
        });

        horizontalLoop(".MemberGallery__listitem--reverse", {
          speed: 1.5,
          repeat: -1,
          paddingRight: 16,
          reversed: true,
        });


      });



    });

    const horizontalLoop = (items, config) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        // curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        }
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl
          .to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond
            },
            0
          )
          .fromTo(
            item,
            {
              xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
            },
            {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      // function toIndex(index, vars) {
      //   vars = vars || {};
      //   Math.abs(index - curIndex) > length / 2 &&
      //     (index += index > curIndex ? -length : length); // always go in the shortest direction
      //   let newIndex = gsap.utils.wrap(0, length, index),
      //     time = times[newIndex];
      //   if (time > tl.time() !== index > curIndex) {
      //     // if we're wrapping the timeline's playhead, make the proper adjustments
      //     vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      //     time += tl.duration() * (index > curIndex ? 1 : -1);
      //   }
      //   curIndex = newIndex;
      //   vars.overwrite = true;
      //   return tl.tweenTo(time, vars);
      // }
      // tl.next = (vars) => toIndex(curIndex + 1, vars);
      // tl.previous = (vars) => toIndex(curIndex - 1, vars);
      // tl.current = () => curIndex;
      // tl.toIndex = (index, vars) => toIndex(index, vars);
      // tl.times = times;
      // tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    };

    onUnmounted(() => {

      anime.revert();


    });

    // onBeforeUnmount(() => {
    //   // Cleanup code if needed
    // });



    return {
      // imageSources,
      // galleryList,
      // galleryListReverse,

    };
  },
};
</script>