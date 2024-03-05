<template>
  <div class="container mx-auto pt-20 ">

    <div class=" ">
      <div>


        <div class="w-1/3 mx-auto pb-10"><img src="../assets/images/titles/news.png" alt="" /></div>

        <div v-if="paginatedArticles.length == 0" class="m-auto w-1/5 h-screen">
          <img src="../assets/images/newsLoading.png" alt="">
          <p class="text-center text-2xl">讀取資料中...</p>

        </div>
        <div v-else class="grid md:grid-cols-4  grid-cols-2 gap-4  max-sm:px-5">
          <NewsComponent :datas="paginatedArticles"></NewsComponent>

        </div>

      </div>

    </div>


    <ul class="flex items-center -space-x-px h-8 text-sm justify-center my-8" v-show="paginatedArticles.length !== 0">
      <li>
        <button @click="state.currentPage -= 1" :class="{ 'pointer-events-none ': state.currentPage === 1 }"
          class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg
           hover:bg-gray-100 hover:text-gray-700 ">
          <span class="sr-only">Previous</span>
          <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      <li v-for="i in pageCount" :key="i">
        <button  @click="state.currentPage = i"  :class="{ 'pointer-events-none bg-gray-500 text-white': state.currentPage === i }"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 
          hover:text-gray-700 ">
          {{ i }}</button>
      </li>

      <li>
        <button  @click="state.currentPage += 1" :class="{ 'pointer-events-none': state.currentPage === pageCount }"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg
           hover:bg-gray-100 hover:text-gray-700 ">
          <span class="sr-only">Next</span>
          <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>


  </div>
</template>

<script>

import { ref, onMounted, reactive, computed } from 'vue'


import newsStores from "@/stores/allStore";

import { storeToRefs } from 'pinia';

import NewsComponent from '../components/NewsComponent.vue'
export default {
  setup() {

    const newsDatasStores = newsStores()
    const { newsDatas } = storeToRefs(newsDatasStores)

    const selectedKind = ref(null);
    // const currentPage = ref(1);
    // const onePage = 4

    const state = reactive({
      currentPage: 1,
      onePage: 8,

    });


    const pageCount = computed(() => {
      return Math.ceil(newsDatas.value.length / state.onePage);
    });

    const filteredArticles = computed(() => {
      let filteredNewsDatas = newsDatas.value.slice();
      if (selectedKind.value) {
        filteredNewsDatas = filteredNewsDatas.filter(
          (newsData) => newsData.title === selectedKind.value
        );
        // state.currentPage = 1;
      }
      return filteredNewsDatas;
    });

    const paginatedArticles = computed(() => {
      const startIndex = (state.currentPage - 1) * state.onePage;
      const endIndex = startIndex + state.onePage;
      return filteredArticles.value.slice(startIndex, endIndex);
    });


    onMounted(() => {

      newsDatasStores.getNews()

    });

    return {
      state,
      newsDatas,
      selectedKind,
      pageCount,
      filteredArticles,
      paginatedArticles,

    };
  },
  components: {
    NewsComponent,
  },

};
</script>

<style ></style>