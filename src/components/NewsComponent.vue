<template>

    <div  class="" v-for="i in datas" :key="i.id"  @click="openNews(i)">
        <div class="rounded-3xl shadow-lg  bg-white overflow-hidden active:scale-95 ">
            <div class="h-60 overflow-hidden">
                <img class="h-full rounded-2xl hover:scale-125 transition duration-300 ease-in-out" src="../assets/images/411989594.jpg" alt="" />
            </div>
            <div class="p-3">
                <h3 class="truncate">
                    {{ i.firstName }}
                </h3>
                <div class="flex">
                    <h4>{{ i.title }}</h4>
                    <h4>{{ i.lastName }}</h4>
                </div>
            </div>
        </div>
    </div>



    <!-- <div class="fixed  top-0 w-full h-full">
        <div class="absolute top-0 w-full h-full bg-slate-500 opacity-85"></div>
        <div></div>
    </div> -->

    <!-- ///////////////////////////////////////// -->

    <div ref="modal" class="fixed  top-0 left-0 w-screen h-screen newsInfoCard " :class="ttt ? 'z-50' : 'hidden'">
        <div class="absolute top-0 w-full h-full bg-slate-500 opacity-50" @click="openNews()"></div>

        <div ref="info" class="absolute top-0 bottom-20 right-0 left-0 m-auto  bg-white w-4/5 h-5/6 p-6 rounded-2xl">
            <div class="overflow-y-auto h-full flex flex-col xl:flex-row">
                <div class="xl:w-1/2 w-full mr-10">
                    <img class="object-cover" src="../assets/images/411989594.jpg" alt="" />
                </div>
                <div class="xl:w-1/2 w-full">
                    <h3>
                        {{ selectedNews?.firstName }}
                    </h3>
                    <hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.Voluptatem dolorum corrupti reprehenderit dicta, a nisi cum ipsam dolor dolore,
                        nihil aperiam
                        natus explicabo amet facere quidem. Et atque dignissimos facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.Voluptatem dolorum corrupti reprehenderit dicta, a nisi cum ipsam dolor dolore,
                        nihil aperiam
                        natus explicabo amet facere quidem. Et atque dignissimos facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.Voluptatem dolorum corrupti reprehenderit dicta, a nisi cum ipsam dolor dolore,
                        nihil aperiam
                        natus explicabo amet facere quidem. Et atque dignissimos facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.Voluptatem dolorum corrupti reprehenderit dicta, a nisi cum ipsam dolor dolore,
                        nihil aperiam
                        natus explicabo amet facere quidem. Et atque dignissimos facilis!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur
                        adipisicing
                        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
                        consectetur
                        adipisicing elit.Voluptatem dolorum corrupti reprehenderit dicta, a nisi cum ipsam dolor dolore,
                        nihil aperiam
                        natus explicabo amet facere quidem. Et atque dignissimos facilis!
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

import { onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'

export default {
    props: {
        datas: {
            type: Array,
            required: true,
        },
        // selectedNews:{
        //     type:Object,
        //     required: true,
        // }
    },

    setup() {
        let newsctx;
        let aaa;
        const modal = ref(null)
        const info = ref(null)

        const ttt = ref(false)
        const selectedNews = ref(null)
        function openNews(i) {
            if (i) {
                aaa.reversed(!aaa.reversed());
                selectedNews.value = i
                ttt.value = true
                // document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
                console.log(selectedNews.value )

            }
            else {
                console.log('有點到2')
                selectedNews.value = null
                // document.body.style.overflow = 'auto';
                document.documentElement.style.overflow= 'auto';
                aaa.reversed(!aaa.reversed());
                ttt.value = false
                console.log(selectedNews.value )

            }
        }


        onMounted(() => {
            newsctx = gsap.context(() => {
                aaa = gsap
                    .timeline()
                    .fromTo(modal.value, { opacity: 0 }, { opacity: 1, duration: 0.3 })
                    .fromTo(info.value, {
                        y: "-150%",
                    }, { y: 30, duration: 0.2 }, '<')
                    .reverse();
            });


        });

        onUnmounted(() => {
            newsctx.revert();

        });
        // watch(ttt, (newValue) => {

        //     if (newValue) {
        //         document.body.style.overflow = 'hidden';
        //     } else {
        //         document.body.style.overflow = 'auto';
        //     }
        // });

        return {
            modal,
            openNews,
            ttt,
            info,
            selectedNews

        };
    },
};
</script>
  
<style >

/* body,html{
    overscroll-behavior: none;
} */

/* html{
    overflow: hidden;
} */
</style>