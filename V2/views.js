import * as styles from './styles.js'

const player = () => {
  const player_frame = document.createElement('div')
  const button = document.createElement('div')

  player_frame.style = styles.player_frame()
  button.style = styles.button('../assets/material_design_play.svg')
  
  return player_frame.append(button)
}
