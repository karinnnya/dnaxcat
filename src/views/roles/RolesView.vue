<template>
  <div class="roles">

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


 



    <div class="container mx-auto mt-10 relative ">


      <div class="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 gap-2">


        <div>
          <div class=" p-3 image1 " ref="roleCard">
            <div ref="roleInfo" :class="[roleOpen ? 'w-full h-full absolute top-0 ' : ' p-4 relative']"
              class="rounded-3xl  shadow-lg border-2 border-black-500 bg-white " @click="openRole()" role="button">



              <div class="h-2/3 z-2 relative z-10 " ref="reImg">
                <img ref="roleImg" src="../../assets/images/catking_0.png" alt="">
              </div>



              <div ref="reNameJob" :class="[roleOpen ? 'flex items-end' : 'p-3 z-10 relative']">
                <h3 ref="roleName"
                  :class="[roleOpen ? 'md:text-5xl text-4xl text-amber-500 pr-2 whitespace-nowrap' : '']">九藏</h3>
                <h4 ref="roleJob" :class="[roleOpen ? 'text-xl whitespace-nowrap' : 'text-slate-500 tracking-wide']"
                  style="text-shadow: -2px -2px 0 white,
              2px -2px 0 white,
              -2px 2px 0 white,
              2px 2px 0 white;">（開發中只有他能點）</h4>
              </div>

              <div ref="roleLogo" :class="[roleOpen ? 'w-[90px]' : 'absolute bottom-10 right-6 scale-150 ']" class="">
                <img src="../../assets/images/role_LOGO_1.png" alt="">
              </div>

            </div>


          </div>
        </div>


        <div class="  p-3" ref="qazaq">
          <div class="  rounded-3xl shadow-lg border-2 border-black-500 bg-white p-4 relative ">
            <div class="absolute bottom-10 right-6 scale-150 opacity-30 z-1">
              <img src="../../assets/images/role_LOGO_1.png" alt="">
            </div>
            <div class="h-2/3 z-2 relative">
              <img class="h-full  " src="../../assets/images/catking_4.png" alt="">
            </div>
            <div class="p-3">
              <h3>小滴</h3>
              <h4>皇家書記官</h4>
            </div>


          </div>
        </div>

        <div class="  p-3" ref="qazaq">
          <div class="  rounded-3xl shadow-lg border-2 border-black-500 bg-white p-4 relative ">
            <div class="absolute bottom-10 right-6 scale-150 opacity-30 z-1">
              <img src="../../assets/images/role_LOGO_1.png" alt="">
            </div>
            <div class="h-2/3 z-2 relative">
              <img class="h-full  " src="../../assets/images/catking_4.png" alt="">
            </div>
            <div class="p-3">
              <h3>小滴</h3>
              <h4>皇家書記官</h4>
            </div>


          </div>
        </div>
        <div class="  p-3" ref="qazaq">
          <div class="  rounded-3xl shadow-lg border-2 border-black-500 bg-white p-4 relative ">
            <div class="absolute bottom-10 right-6 scale-150 opacity-30 z-1">
              <img src="../../assets/images/role_LOGO_1.png" alt="">
            </div>
            <div class="h-2/3 z-2 relative">
              <img class="h-full  " src="../../assets/images/catking_4.png" alt="">
            </div>
            <div class="p-3">
              <h3>小滴</h3>
              <h4>皇家書記官</h4>
            </div>


          </div>
        </div>
        <div class="  p-3" ref="qazaq">
          <div class="  rounded-3xl shadow-lg border-2 border-black-500 bg-white p-4 relative ">
            <div class="absolute bottom-10 right-6 scale-150 opacity-30 z-1">
              <img src="../../assets/images/role_LOGO_1.png" alt="">
            </div>
            <div class="h-2/3 z-2 relative">
              <img class="h-full  " src="../../assets/images/catking_4.png" alt="">
            </div>
            <div class="p-3">
              <h3>小滴</h3>
              <h4>皇家書記官</h4>
            </div>


          </div>
        </div>
        <div class="  p-3" ref="qazaq">
          <div class="  rounded-3xl shadow-lg border-2 border-black-500 bg-white p-4 relative ">
            <div class="absolute bottom-10 right-6 scale-150 opacity-30 z-1">
              <img src="../../assets/images/role_LOGO_1.png" alt="">
            </div>
            <div class="h-2/3 z-2 relative">
              <img class="h-full  " src="../../assets/images/catking_4.png" alt="">
            </div>
            <div class="p-3">
              <h3>小滴</h3>
              <h4>皇家書記官</h4>
            </div>


          </div>
        </div>


      </div>


      <!-- 詳細/////////////////////////////////////////////// -->


      <div class=" w-[90%] left-1/2 -translate-x-1/2  p-10 absolute md:top-0 -top-20 "
        :class="roleOpen ? 'block' : 'hidden '">


        <div class="cardMove " @click="toggleCard">

          <div class="card-front ">
            <div class="absolute right-0 bottom-10 z-50" @click="openRole('x')">
              <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50">
                <path
                  d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
            <div class=" relative " ref="modal">

              <div class="relative z-30 p-10">
                <div class="flex items-end " ref="cardName">

                </div>

                <p class="mt-5 mb-10 text-lg sv">
                  外表看似文靜，卻意外健談，貌似有點笨手笨腳時常跌倒，不知為何常被烏鴉欺負。喜歡帶著筆記本，將所看到的事情給紀錄下來。
                </p>


                <div class="flex lg:flex-row flex-col justify-between">

                  <div class="lg:w-1/4 lg:mr-10 sv1">
                    <div class="text-2xl flex">
                      <img class="w-[30px] mr-2" src="@/assets/images/icon.png" alt="">

                      <p>喵檔案</p>
                    </div>
                    <div class="md:text-xl text-lg  md:p-10 p-3">
                      <div class="  md:mb-5 mb-1">
                        <p>狀態：母/成貓</p>
                      </div>
                      <div class="  md:mb-5 mb-1 ">
                        <p>生日：8月4日</p>
                      </div>
                      <div class="  md:mb-5 mb-1">
                        <p>喜歡：閱讀、創作</p>
                      </div>
                      <div class="  md:mb-5 mb-1">
                        <p>討厭：書本被破壞</p>
                      </div>
                    </div>
                  </div>

                  <!-- 四個點 -->
                  <div class="relative w-full " :class="isFlipped ? 'opacity-0' : 'opacity-1'">
                    <div ref="cardImg" class="lg:w-1/2 lg:translate-x-1/3 xl:translate-y-0 lg:translate-y-1/4 w-full ">

                    </div>
                    <div class="flex flex-wrap justify-between h-full">

                      <div class="lg:absolute left-0 top-0 lg:w-1/4 w-1/2">
                        <p class="ml-9 -mb-4  xl:text-xl sv  whitespace-nowrap">紀試紀錄紀錄錄筆錄筆</p>

                        <svg class="w-full " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 337 136.7" shape-rendering="geometricPrecision">
                          <g>
                            <path class="sv"
                              d="M24.5,2.7C12.6,2.7,3,12.3,3,24.2C3,36,12.6,45.7,24.5,45.7s21.5-9.7,21.5-21.5C46,12.3,36.4,2.7,24.5,2.7Zm6.8,12c1,.2,1.9,1,2.5,2s.9,2.3-.1,3.1c-1.3,1.1-3.4.7-4.1-2.4-.5-2.4.7-3,1.7-2.7Zm-9.8-2.3c1-1,2.9-.8,4.3.4s3.3,4.1,1.2,5.9c-1.3,1.1-4,.9-4.9-1.4-.8-2-1.5-4.1-.6-4.9ZM17,14.5c1.6,0,3,2.2,3.4,3.5s.8,3.2-.9,4.3c-1.5.9-4.5-.5-4.8-3.7s.9-4.1,2.3-4.1ZM12.7,27.4c-1.1-2.1-.7-4.4.7-4.5s3.1.5,3.8,1.5s1.9,2.9.6,4.6c-1.4,1.8-4,.6-5.1-1.6Zm20.1,4.4c-2.1,1.1-2.7.5-3.7,1.1-1.3.9-.8,1.7-3,2.9-1.4.8-2.9.9-4.2.7-1.7-.3-4.6-2.1-3.8-5.9.4-2.1,2.8-2.7,2.4-4.6-.2-1.1,0-2.4.6-3.4.7-1.2,2.1-2.3,4.1-1.9c2.9.5,2.7,2.9,6.9.9c2.1-1,4.9,1.2,4.8,4.5c0,2.4-1.5,4.3-4.1,5.7Z" />
                          </g>


                          <path class=" sv1"
                            d="M197.8,25.5h-152.9c-1.1,0-1.9-.9-1.9-1.9v0c0-1.1.9-1.9,1.9-1.9h152.9c1.1,0,1.9.9,1.9,1.9v0c.1,1-.8,1.9-1.9,1.9Z" />

                          <path class=" sv2 hidden lg:block"
                            d="M304.9,133.1L196.7,25c-.7-.7-.7-2,0-2.7v0c.7-.7,2-.7,2.7,0L307.5,130.4c.7.7.7,2,0,2.7v0c-.7.8-1.9.8-2.6,0Z" />
                        </svg>
                        <p class="ml-5 xl:-mt-14 -mt-10   w-2/3 xl:text-lg sv1 ">
                          1.可隨意念變換大小的毛筆，配合著亞默神來一筆的繪畫力，在櫻花村也留下不少作品。</p>

                      </div>

                      <div class="lg:w-1/4 w-1/2 lg:absolute left-0 bottom-0">

                        <p class="ml-9 -mb-4  xl:text-xl sv  whitespace-nowrap">紀試紀錄筆試紀錄筆錄筆</p>

                        <svg class="w-full " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 337 136.7" shape-rendering="geometricPrecision">
                          <g>
                            <path class="sv "
                              d="M24.5,2.7C12.6,2.7,3,12.3,3,24.2C3,36,12.6,45.7,24.5,45.7s21.5-9.7,21.5-21.5C46,12.3,36.4,2.7,24.5,2.7Zm6.8,12c1,.2,1.9,1,2.5,2s.9,2.3-.1,3.1c-1.3,1.1-3.4.7-4.1-2.4-.5-2.4.7-3,1.7-2.7Zm-9.8-2.3c1-1,2.9-.8,4.3.4s3.3,4.1,1.2,5.9c-1.3,1.1-4,.9-4.9-1.4-.8-2-1.5-4.1-.6-4.9ZM17,14.5c1.6,0,3,2.2,3.4,3.5s.8,3.2-.9,4.3c-1.5.9-4.5-.5-4.8-3.7s.9-4.1,2.3-4.1ZM12.7,27.4c-1.1-2.1-.7-4.4.7-4.5s3.1.5,3.8,1.5s1.9,2.9.6,4.6c-1.4,1.8-4,.6-5.1-1.6Zm20.1,4.4c-2.1,1.1-2.7.5-3.7,1.1-1.3.9-.8,1.7-3,2.9-1.4.8-2.9.9-4.2.7-1.7-.3-4.6-2.1-3.8-5.9.4-2.1,2.8-2.7,2.4-4.6-.2-1.1,0-2.4.6-3.4.7-1.2,2.1-2.3,4.1-1.9c2.9.5,2.7,2.9,6.9.9c2.1-1,4.9,1.2,4.8,4.5c0,2.4-1.5,4.3-4.1,5.7Z" />
                          </g>


                          <path class=" sv1 "
                            d="M197.8,25.5h-152.9c-1.1,0-1.9-.9-1.9-1.9v0c0-1.1.9-1.9,1.9-1.9h152.9c1.1,0,1.9.9,1.9,1.9v0c.1,1-.8,1.9-1.9,1.9Z" />

                          <path class=" sv2 hidden lg:block "
                            d="M304.9,133.1L196.7,25c-.7-.7-.7-2,0-2.7v0c.7-.7,2-.7,2.7,0L307.5,130.4c.7.7.7,2,0,2.7v0c-.7.8-1.9.8-2.6,0Z" />
                        </svg>
                        <p class="ml-5 xl:-mt-14 -mt-10  w-2/3 xl:text-lg  sv1 ">
                          2.可隨意念變換大小的毛筆，配合著亞默神來一筆的繪畫力，在櫻花村也留下不少作品。</p>

                      </div>


                      <div class="lg:w-1/4 w-1/2  lg:absolute relative mt-10 xl:right-[180px] lg:right-[100px]  top-0 ">

                        <p
                          class=" -mb-4  xl:text-xl text-right xl:right-10 lg:right-5 left-8 -top-3 absolute  sv whitespace-nowrap">
                          測試測試紀錄筆</p>


                        <svg class="w-full rotateY  max-lg:transform-none" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 337 136.7"
                          shape-rendering="geometricPrecision">
                          <g>
                            <path class="sv "
                              d="M24.5,2.7C12.6,2.7,3,12.3,3,24.2C3,36,12.6,45.7,24.5,45.7s21.5-9.7,21.5-21.5C46,12.3,36.4,2.7,24.5,2.7Zm6.8,12c1,.2,1.9,1,2.5,2s.9,2.3-.1,3.1c-1.3,1.1-3.4.7-4.1-2.4-.5-2.4.7-3,1.7-2.7Zm-9.8-2.3c1-1,2.9-.8,4.3.4s3.3,4.1,1.2,5.9c-1.3,1.1-4,.9-4.9-1.4-.8-2-1.5-4.1-.6-4.9ZM17,14.5c1.6,0,3,2.2,3.4,3.5s.8,3.2-.9,4.3c-1.5.9-4.5-.5-4.8-3.7s.9-4.1,2.3-4.1ZM12.7,27.4c-1.1-2.1-.7-4.4.7-4.5s3.1.5,3.8,1.5s1.9,2.9.6,4.6c-1.4,1.8-4,.6-5.1-1.6Zm20.1,4.4c-2.1,1.1-2.7.5-3.7,1.1-1.3.9-.8,1.7-3,2.9-1.4.8-2.9.9-4.2.7-1.7-.3-4.6-2.1-3.8-5.9.4-2.1,2.8-2.7,2.4-4.6-.2-1.1,0-2.4.6-3.4.7-1.2,2.1-2.3,4.1-1.9c2.9.5,2.7,2.9,6.9.9c2.1-1,4.9,1.2,4.8,4.5c0,2.4-1.5,4.3-4.1,5.7Z" />
                          </g>


                          <path class=" sv1  "
                            d="M197.8,25.5h-152.9c-1.1,0-1.9-.9-1.9-1.9v0c0-1.1.9-1.9,1.9-1.9h152.9c1.1,0,1.9.9,1.9,1.9v0c.1,1-.8,1.9-1.9,1.9Z" />

                          <path class="sv2 hidden lg:block"
                            d="M304.9,133.1L196.7,25c-.7-.7-.7-2,0-2.7v0c.7-.7,2-.7,2.7,0L307.5,130.4c.7.7.7,2,0,2.7v0c-.7.8-1.9.8-2.6,0Z" />
                        </svg>
                        <p class=" xl:-mt-14 -mt-10 w-2/3 xl:text-lg lg:ml-20 ml-5  sv1 scale-x-0">
                          3.可隨意念變換大小的毛筆，配合著亞默神來一筆的繪畫力，在櫻花村也留下不少作品。</p>

                      </div>


                      <div class="lg:w-1/4 w-1/2 lg:absolute relative xl:right-[180px] lg:right-[100px] bottom-0 mt-10">

                        <p
                          class=" -mb-4  xl:text-xl text-right xl:right-10 lg:right-5 left-8 -top-3 absolute  sv whitespace-nowrap">
                          測試筆錄筆錄筆錄筆</p>

                        <svg class="w-full  rotateY max-lg:transform-none" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 337 136.7"
                          shape-rendering="geometricPrecision">
                          <g>
                            <path class="sv "
                              d="M24.5,2.7C12.6,2.7,3,12.3,3,24.2C3,36,12.6,45.7,24.5,45.7s21.5-9.7,21.5-21.5C46,12.3,36.4,2.7,24.5,2.7Zm6.8,12c1,.2,1.9,1,2.5,2s.9,2.3-.1,3.1c-1.3,1.1-3.4.7-4.1-2.4-.5-2.4.7-3,1.7-2.7Zm-9.8-2.3c1-1,2.9-.8,4.3.4s3.3,4.1,1.2,5.9c-1.3,1.1-4,.9-4.9-1.4-.8-2-1.5-4.1-.6-4.9ZM17,14.5c1.6,0,3,2.2,3.4,3.5s.8,3.2-.9,4.3c-1.5.9-4.5-.5-4.8-3.7s.9-4.1,2.3-4.1ZM12.7,27.4c-1.1-2.1-.7-4.4.7-4.5s3.1.5,3.8,1.5s1.9,2.9.6,4.6c-1.4,1.8-4,.6-5.1-1.6Zm20.1,4.4c-2.1,1.1-2.7.5-3.7,1.1-1.3.9-.8,1.7-3,2.9-1.4.8-2.9.9-4.2.7-1.7-.3-4.6-2.1-3.8-5.9.4-2.1,2.8-2.7,2.4-4.6-.2-1.1,0-2.4.6-3.4.7-1.2,2.1-2.3,4.1-1.9c2.9.5,2.7,2.9,6.9.9c2.1-1,4.9,1.2,4.8,4.5c0,2.4-1.5,4.3-4.1,5.7Z" />
                          </g>


                          <path class=" sv1  "
                            d="M197.8,25.5h-152.9c-1.1,0-1.9-.9-1.9-1.9v0c0-1.1.9-1.9,1.9-1.9h152.9c1.1,0,1.9.9,1.9,1.9v0c.1,1-.8,1.9-1.9,1.9Z" />

                          <path class="sv2 hidden lg:block"
                            d="M304.9,133.1L196.7,25c-.7-.7-.7-2,0-2.7v0c.7-.7,2-.7,2.7,0L307.5,130.4c.7.7.7,2,0,2.7v0c-.7.8-1.9.8-2.6,0Z" />
                        </svg>

                        <p class="xl:-mt-14 -mt-10 w-2/3 xl:text-lg lg:ml-20 ml-5  sv1 ">
                          4.可隨意念變換大小的毛筆，配合著亞默神來一筆的繪畫力，在櫻花村也留下不少作品。</p>

                      </div>



                    </div>


                  </div>

                </div>



              </div>
            </div>
          </div>


          <div class="card-back rotateY">
            <div class=" rounded-3xl shadow-lg border-2 border-black-500 bg-whit bg-white px-10 py-28">
              <div class=" mb-10">
                動畫表現：
              </div>

              <div class="lg:block hidden">
                <swiper :navigation="true" class="mySwiper duration-500 " :class="isFlipped ? 'opacity-1 ' : 'opacity-0'">
                  <swiper-slide><img src="../../assets/images/catking_0-1.jpg" alt=""></swiper-slide>
                  <swiper-slide><img src="../../assets/images/catking_0-2.jpg" alt=""></swiper-slide>
                  <swiper-slide><img src="../../assets/images/catking_0-3.jpg" alt=""></swiper-slide>

                </swiper>
              </div>

              <ul class="lg:hidden block">
                <li><img src="../../assets/images/catking_0-1.jpg" alt=""></li>
                <li><img src="../../assets/images/catking_0-2.jpg" alt=""></li>
                <li><img src="../../assets/images/catking_0-3.jpg" alt=""></li>
              </ul>
            </div>

            <!-- <div class="">

              <swiper :navigation="true" :modules="modules" class="mySwiper" :class="roleOpen ? 'block' : 'hidden -z-50'">
                <swiper-slide><img src="../../assets/images/catking_0-1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/images/catking_0-2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../../assets/images/catking_0-3.jpg" alt=""></swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>

              </swiper>
            </div> -->

          </div>

        </div>

      </div>


    </div>


  </div>
</template>

<style lang="scss" scoped>
.roles {
  background: url('../../assets/images/meow_bg1-b.jpg') no-repeat fixed center;
  background-size: cover;
}

.roled {
  background: url('../../assets/images/role_LOGO_1.png') no-repeat;
  background-size: contain;

}


.card-front,
.card-back {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  // padding: 10px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}



.card-back {
  transform: rotateY(180deg);
}

///////////////////////////
/// 
/// 
/// 
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

  &:active {
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

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
</style>

<script>


import { ref, onMounted, reactive, nextTick, onUnmounted, watch } from 'vue'
import { gsap, Observer, Flip } from 'gsap/all'
// import { Flip } from 'gsap/Flip';
import VanillaTilt from 'vanilla-tilt';

gsap.registerPlugin(Flip);
gsap.registerPlugin(Observer);


//
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// import './style.css';

import king from '@/assets/images/area/area_king.png'
import sakura from '@/assets/images/area/area_sakura.png'
import devi from '@/assets/images/area/area_devi.png'

export default {

  setup() {

    // const modules = ref([]);
    let datas = ref([
      { title: king, class: 'king' },
      { title: sakura, class: 'sakura' },
      { title: devi, class: 'devi' }
    ]);


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


    let apple;
    let ctx;

    const roleOpen = ref(false);
    const cardText = ref(false);
    const qazaq = ref(false);


    const modal = ref(null);

    const roleInfo = ref(null);

    const roleImg = ref(null);
    const roleLogo = ref(null);
    const roleName = ref(null);
    const roleJob = ref(null);


    const selectedRole = reactive({});

    const cardImg = ref(null);
    const cardName = ref(null);

    const reImg = ref(null);
    const reNameJob = ref(null);

    const roleCard = ref(null);

    //翻面
    const isFlipped = ref(false);


    const tiltOptions = {
      max: 25,
      scale: 1.1,
      speed: 1000,
    };

    // let destroyBox = document.querySelector(".image1")


    const openRole = async (x) => {
      // ctx = gsap.context(() => { });


      if (x == 'x') {
        isFlipped.value = !isFlipped.value;
        // if (isFlipped.value) {
        //   toggleCard()

        // }
        apple.reversed(!apple.reversed());
        const state = [roleImg.value, roleName.value, roleJob.value, roleLogo.value, roleInfo.value, roleCard.value]
        const state2 = Flip.getState(state);
        roleCard.value.appendChild(roleInfo.value);
        reImg.value.appendChild(roleImg.value);
        roleInfo.value.appendChild(roleLogo.value);
        reNameJob.value.appendChild(roleName.value);
        reNameJob.value.appendChild(roleJob.value);

        roleOpen.value = false

        let destroyBox = roleInfo.value

        setTimeout(() => {
          roleCard.value.classList.remove('z-40');

          VanillaTilt.init(destroyBox, tiltOptions);
        }, 1000)

        await nextTick();

        Flip.from(state2, {
          absolute: true,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power1.inOut",

        })
        gsap.to(modal.value, { autoAlpha: 1, duration: 0.35 });
      }
      else {
        roleCard.value.classList.add('z-40');
        console.log(isFlipped.value)
        let destroyBox = roleInfo.value

        destroyBox.vanillaTilt.destroy();

        roleOpen.value = true
        // roleCard.value.classList.remove('image1')
        // console.log(roleCard.value.classList)
        const state = [roleImg.value, roleName.value, roleJob.value, roleLogo.value, roleInfo.value]
        const state2 = Flip.getState(state);

        modal.value.appendChild(roleInfo.value);


        cardImg.value.appendChild(roleImg.value);
        cardName.value.appendChild(roleLogo.value);
        cardName.value.appendChild(roleName.value);
        cardName.value.appendChild(roleJob.value);

        // roleCard.value.addClass('z-40')



        await nextTick();

        Flip.from(state2, {
          duration: 0.6,

          stagger: 0.05,
          ease: "power1.inOut",
          onComplete: () => {
            apple.reversed(!apple.reversed());
          },
        });



      }
    }



    //翻面

    const toggleCard = () => {
      const card = document.querySelector('.cardMove');

      if (isFlipped.value) {
        console.log('if', isFlipped.value)

        gsap.to(card.querySelector('.card-front'), 1, { autoAlpha: 1, rotationY: 0 });
        gsap.to(card.querySelector('.card-back'), 1, { autoAlpha: 1, rotationY: 180 }, 0);
      } else {
        console.log('else', isFlipped.value)
        gsap.to(card.querySelector('.card-front'), 1, { autoAlpha: 1, rotationY: 180 });
        gsap.to(card.querySelector('.card-back'), 1, { autoAlpha: 1, rotationY: 0 }, 0);
      }

      isFlipped.value = !isFlipped.value;


    };


    // const roleCardElement = ref(null);  // 正確設置 ref

    // // 在 ref 上設置 DOM 元素的參考
    // const setRef = (el) => {
    //   roleCardElement.value = el;
    // };

    // // 監聽 roleOpen 的變化
    // watch(roleOpen, (newValue) => {
    //   if (!newValue) {
    //     // 如果 roleOpen 變為 false，則在 5 秒後執行操作
    //     // console.log(roleCard.value)
    //     setTimeout(() => {
    //       // 移除 z-40 類
    //       removeZ40Class();
    //     }, 5000);
    //   }
    // });

    // // 移除 z-40 類的操作
    // const removeZ40Class = () => {
    //   if (roleCard.value) {
    //     console.log(roleCard.value)
    //     roleCard.value.classList.remove('z-40');
    //   }
    // };


    onMounted(() => {
      let destroyBox = roleInfo.value
      let destroyBox2 = qazaq.value


      // console.log(destroyBox)
      VanillaTilt.init(destroyBox, tiltOptions);
      VanillaTilt.init(destroyBox2, tiltOptions);


      // VanillaTilt.init(document.querySelectorAll(".image1"), {
      //   max: 25,
      //   scale: 1.1,
      //   speed: 1000,
      // });

      // VanillaTilt.init(document.querySelector(".image1")).destroy();

      ctx = gsap.context(() => {
        apple = gsap
          .timeline()
          .fromTo('.sv', { opacity: 0 }, { opacity: 1, duration: 0.3 })
          .fromTo('.sv1', {
            scaleX: 0,
            x: 0,
          }, { scaleX: 1, duration: 0.2 })
          .fromTo('.sv2', {
            x: 0,
            y: 0,
            scaleX: 0,
            scaleY: 0,
          }, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.2
          })
          .reverse();
      }, modal.value);




    });

    onUnmounted(() => {
      ctx.revert();

    });

    /////////////////////////////////////////////////////////////////////


    return {
      cardText,
      reImg,
      reNameJob,
      roleJob,
      roleName,
      roleInfo,
      roleCard,
      roleImg,
      roleLogo,
      openRole,
      roleOpen,
      selectedRole,
      cardImg,
      cardName,
      modal,
      qazaq,
      toggleCard,
      isFlipped,

      datas,

   
      btnCC,
      changeBtnCC,
    
      // modules: [Navigation],
    };




  },
  components: {
    Swiper,
    SwiperSlide,
  },

}


</script>