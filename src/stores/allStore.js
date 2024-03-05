// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

const headers = {
  'app-id': '659a6de2c10696350a3a4a9b',
};

// const { VITE_APP_URL } = import.meta.env;
// import Swal from "sweetalert2";

export default defineStore("newsStores", {
  state: () => {
    return {
      newsDatas: [],
      newAticles: [],
      data: "",
    };
  },

  getters:{
    // getNews:(state)=>{
    //    axios
    //       .get('https://dummyapi.io/data/v1/user', {
    //         headers: headers,
    //       })
    //       .then((res) => {
    //         state.newsDatas = res.data.data.reverse()
    //         console.log(res.data.data.reverse())
    //       })
    //       .catch((error) => {
    //         console.error('錯誤');
    //         console.error(error);
    //       });
    // }

  },
  actions: {
    
     getNews() {
      return axios
        .get('https://dummyapi.io/data/v1/user', {
          headers: headers,
        })
        .then((res) => {
          this.newsDatas = res.data.data.reverse()
        })
        .catch((error) => {
          console.error('錯誤');
          console.error(error);
        });
    }


  },
});

