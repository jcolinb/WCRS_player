const player_frame = document.getElementById('player-frame')
const cont = document.getElementById('cont')

const player_factory = ({text,src}) => {
  const init = (init) => ({get:()=>init,set:(next)=>init=next});
  const state = init(false);

  const player = document.createElement('audio');
  player.src = src;

  const info = document.createElement('text');
  info.textContent = text;

  const button = document.createElement('div');
  button.style.backgroundImage = 'url(assets/material_design_play.svg)';
  button.style.height = '80%';
  button.style.width = '20%';
  button.style.backgroundRepeat = 'no-repeat';
  button.style.backgroundSize = 'contain';

  const load = (url,tag) => (player.src = url) && (info.textContent = tag);
  const play = () => {player.play(); 
         (button.style.backgroundImage = 'url(assets/material_design_pause.svg)');
         state.set(true);}
  const pause = () => {player.pause(); 
         (button.style.backgroundImage = 'url(assets/material_design_play.svg)');
         state.set(false);}

  button.addEventListener('click',()=>(state.get()) ? pause() : play())

  return ({load,play,pause,button,info})
} 

const player = player_factory({text:'WCRS',src:'http://stream.wcrsfm.org:8000/wcrsfm_a'})

player_frame.append(player.button);
player_frame.append(player.info);

const audioListElement = ({text,src}) => {
  const item = document.createElement('text')
  item.textContent = text
  item.addEventListener('click',()=>player.load(src,text) && player.play())
  return item
}

const createAudioList = (obj) => {
  cont.append(audioListElement(obj))
}

[{text:'WCRS',src:'http://stream.wcrsfm.org:8000/wcrsfm_a'},{text:'Liberation',src:'assets/505-Liberation.mp3'},{text:'Fresh Bitches',src:'assets/Timbral-Fresh_Bitches.mp3'}].map(createAudioList);

