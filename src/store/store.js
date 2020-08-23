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
   set_RelatedAudois:[
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
    },
    relatedAudois(state){
      return state.set_RelatedAudois;
    }
  },
  actions: {
     async fetchtodos({commit}){
       let {data} = await axios.get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/playlists/286483654?client_id=a281614d7f34dc30b665dfcaa3ed7505');
      commit('setAudois',data.tracks); 
      },
      async relatedMusic({commit},id){
        let {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/tracks/${id}/related?client_id=a281614d7f34dc30b665dfcaa3ed7505`);
       commit('set_Related',data); 
       },
      get_song({commit},id_song){
        commit('setAudoisSingel',id_song); 
      }
  },
  mutations: {
    setAudois(state,audios){
          state.set_Audois = audios;
    },
    set_Related(state,related){
      state.set_RelatedAudois = related;
    },
    setAudoisSingel(state,singel){
      state.set_SingelAudois = {
        "title": `${singel.title}`,
        "url":`https://api.soundcloud.com/tracks/${singel.id}/stream?client_id=a281614d7f34dc30b665dfcaa3ed7505`,

      };
    }
  },
});


