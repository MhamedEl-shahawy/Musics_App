import axios from 'axios'

const state = {
	todos:[
     {
     	
     } 
	],
	audios_todos:[
     {
     	
     } 
	]
};

const getters = {
   alltodos(){
         return state.todos; 
    },
      audios_info(){
         return state.audios_todos; 
    },
    
};

const actions = {
  async fetchtodos({commit}){
	const  response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.soundcloud.com/playlists/310189278?client_id=a281614d7f34dc30b665dfcaa3ed7505');
     commit('setTodos',response.data); 
    },
   add_Audio({commit},audio_details){

     commit("addaudio",audio_details);
   }, 
};

const mutations = {
  setTodos:(state,todos)=>(state.todos = todos),
  addaudio:(state,todo)=> (state.audios_todos = todo),
};

export default {
	state,
	getters,
	actions,
	mutations
}
