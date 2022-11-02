
const mp3Dir = '../assets/piano/sounds/'

export default function getDrumSylte() {
  const keys = ['w', '2', '3', '4', '5', '6', '7']

  function a() {}

  let styledata = []

  keys.forEach((letter, index) => {
    const item = {
      id: index,

      text: letter,
      sound: mp3Dir + `/${letter}.mp3`
    }

    styledata.push(item)
  })

  return styledata

}
