import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios)



export const store = new Vuex.Store({
  state: {
    set_Audois:[
      {
        
      } 
   ],
   set_SingelAudois:[
       {
         
       }
   ]
   ,
  },
  getters:{
    all_audios(state){
        return state.set_Audois;
    },
    singelaudio(state){
        return state.set_SingelAudois;
    }
  },
  actions: {
     async fetchtodos({commit}){
       let {data} = await axios.get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/playlists/310189278?client_id=a281614d7f34dc30b665dfcaa3ed7505');
      commit('setAudois',data.tracks); 
      },
      get_song({commit},id_song){
       console.log(id_song);
        commit('setAudoisSingel',id_song); 
      }
  },
  mutations: {
    setAudois(state,audios){
          state.set_Audois = audios;
    },
    setAudoisSingel(state,singel){
      state.set_SingelAudois = {

        "title": `${singel.title}`,
        "url":`https://staskobzar.github.io/vue-audio-visual/file_example_MP3_1MG.mp3`,

      };
      console.log( state.set_SingelAudois )
    }
  },
});
