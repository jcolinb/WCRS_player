const button = (img_url) => ({
  backgroundImage: `url(${img_url})`,
  height: '80%',
  width: '20%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
})

const player_frame = () => ({
  backgroundColor: 'grey',
  z-index: '1',
  width: '100vw',
  height: '20vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly'
})

export default {button,player}
