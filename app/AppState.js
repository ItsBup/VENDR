import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
  snacks = [
    new Snack({name: 'Pop-Tart Crocs', price: 350.25, imgUrl: 'https://wwd.com/wp-content/uploads/2023/08/1_PT_Crocs_Hero-Image-e1691516711374.jpg?w=681&h=383&crop=1'}),
    new Snack({name: 'Vegan Crocs', price: 1.00, imgUrl: 'https://video-images.vice.com/articles/6329e45f315d83009442c24c/lede/1663690143824-8292022crodsediblecvartboardssite-lede.jpeg?crop=0.5625550660792952xw:1xh;center,center'}),
    new Snack({name: 'KFC', price: 420.69, imgUrl: 'https://i.insider.com/5f1af42e2618b9254d6c5d4a?width=750&format=jpeg&auto=webp'}),
    new Snack({name: 'Crop de la Crocs', price: 3.50, imgUrl: 'https://www.yarraranges.vic.gov.au/files/content/mycity/v/1/events/crocs-crop-edible-hanging-garden-celebrating-community-garden-day/crocs-crop.png?w=1200'}),
    new Snack({name: 'Croc In Style', price: 1000.00, imgUrl: 'https://bakingingredients.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/02/06092454/Croc-In-Edible-Tray-CI-CC-Barquettes-1-scaled.jpeg'}),
    new Snack({name: 'Borger Crocs', price: 9.00, imgUrl: 'https://i.huffpost.com/gen/2731892/thumbs/o-HAMBURGER-CROC-570.jpg?23'})
  ]

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())