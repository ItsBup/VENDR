import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  snacks = [
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'}),
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'}),
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'}),
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'}),
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'}),
    new Snack({name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png'})
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())