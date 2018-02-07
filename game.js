const canvas = wx.createCanvas()
const canvasOffScreen = wx.createCanvas()

const context = canvas.getContext('2d')
const contextOffScreen = canvasOffScreen.getContext('2d')

context.fillStyle = 'red'
context.fillRect(0, 0, 50, 50)

contextOffScreen.fillStyle = 'orange'
contextOffScreen.fillRect(0, 0, 100, 50)

setTimeout(() => {
  const proportion = canvas.width/canvas.height

  canvas.width = 200
  canvas.height = 200/proportion

  setTimeout(() => {
    context.fillStyle = 'red'
    context.fillRect(0, 0, 50, 50)

    const image = wx.createImage()

    image.onload = function () {
      console.log(image.width, image.height)
      context.drawImage(image, 0, 0)
    }
    image.src = './assets/image/tree-loading.gif'

    setTimeout(() => {
      context.drawImage(canvasOffScreen, 0, 0)
    }, 1000)
  }, 2000)
}, 1000)
