<template>
  <div class="roles">
    <div :class="btnCC" class="duration-1000 ease-in-out">
      <div class="container mx-auto text-center">
        <div class="flex pt-20 ">
          <div class="w-1/3 ">
            <h3>喵王國</h3>
          </div>
          <div class="w-1/3 " role="button" @click="changeBtnCC" @mousemove="updateBgStyle">
            <h3>櫻花村</h3>
          </div>
          <div class="w-1/3 bg-green-100">
            <h3>喵魔界</h3>
          </div>
          <!-- <h3 >喵王國</h3>
        <h3>櫻花村</h3>
        <h3>喵魔界</h3> -->

        </div>
      </div>
    </div>

    <div @click="changeColor" class=" center2" type="button">
      <div class="absolute z-10">center2</div>
    </div>

    <div role="button" class="border-sky-700 border-4 p-3  focus:bg-sky-700">
      按鈕
    </div>





    <div class="border-sky-700 border-4 p-3 btnnnnn" role="button">
      按鈕22
    </div>

    <div class="fill-animation"></div>



    <div @click="changeColor" class=" center3" type="button">
      <div class="absolute z-10">center2</div>
    </div>



    <div :class="btnCC" class="duration-300  ">
      <div class="container mx-auto text-center">
        <div class="flex pt-20 ">
          <div class="w-1/3 " role="button" @click="changeBtnCC('k')">
            <h3>喵王國</h3>
          </div>
          <div class="w-1/3 " role="button" @click="changeBtnCC('s')">
            <h3>櫻花村</h3>
          </div>
          <div class="w-1/3" role="button" @click="changeBtnCC('d')">
            <h3>喵魔界</h3>
          </div>


        </div>
      </div>
    </div>


    <div class="pb-20"></div>



  </div>
</template>

<style lang="scss" scoped>
///////////////////////////
/// 
/// 
/// 
/// 
/// 
.teeee {

  animation: fillAnimation 2s ease-in-out forwards;

}

.fill-animation {
  width: 100px;
  height: 100px;
  background-color: transparent;
  animation: fillAnimation 2s ease-in-out forwards;
}

@keyframes fillAnimation {
  0% {
    transform: scale3d(0, 1, 1);

    /* 初始顏色 */
  }

  100% {
    transform: scale3d(1, 1, 1);

    /* 終點顏色 */
  }
}

.center3 {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px red;
  color: red;
  font-size: inherit;
  font-weight: 700;
  background-color: yellow;
  position: relative;
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;
    background-color: green;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  &.active {
    color: blue;

    &::before {
      transform: scale3d(1, 1, 1);
    }
  }
}


.center2 {
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px red;
  color: red;
  font-size: inherit;
  font-weight: 700;
  background-color: yellow;
  position: relative;
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;
    background-color: green;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    transform: scale3d(0, 1, 1);
    transition: transform 0.5s;
  }

  &:active {
    color: blue;

    &::before {
      transform: scale3d(1, 1, 1);
    }
  }
}


.center {
  &:hover {
    color: blue;
  }

  &::before,
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
  }

  &::before {
    border-top: 2px solid blue;
    border-bottom: 2px solid blue;
    background-color: green;

    transform: scale3d(0, 1, 1);
  }

  // &::after {
  //   border-left: 2px solid blue;
  //   border-right: 2px solid blue;
  //   transform: scale3d(1, 0, 1);
  // }

  &:hover::before,
  &:hover::after {
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s;
  }
}
</style>

<script>


import { ref, onMounted, reactive, nextTick, onUnmounted, watch } from 'vue'


//

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// import './style.css';



export default {

  setup() {

    const btnCC = ref('bg-red-100');
    const bgStyle = ref({});

    const changeBtnCC = (i) => {
      if (i == 's') {
        btnCC.value = 'bg-sky-100';
      } else if (i == 'd') {
        btnCC.value = 'bg-green-100';

      }
      else if (i == 'k') {
        btnCC.value = 'bg-yellow-100';

      }


    };


    /////////////////////////////////////////




    onMounted(() => {


      const element = document.querySelector('.center3');

      element.addEventListener('mousedown', () => {
        element.classList.add('active');
      });

      element.addEventListener('mouseup', () => {
        element.classList.remove('active');
      });


    });



    /////////////////////////////////////////////////////////////////////


    return {

      btnCC,
      changeBtnCC,
      bgStyle,

    };




  },
  components: {

  },

}


</script>