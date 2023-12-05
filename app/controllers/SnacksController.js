import { AppState } from "../AppState.js"
import { examplesService } from "../services/ExampleService.js"

export class SnacksController {
  constructor() {
    console.log('The SnacksController has loaded')

  }

  addMoney() {
    console.log('big cash 🤑', money)
    SnackService.addMoney()
  }

}
