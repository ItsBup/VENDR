import { AppState } from "../AppState.js"
import { snackService } from "../services/SnackService.js"

export class SnacksController {
  constructor() {
    console.log('The SnacksController has loaded')
  }

  addMoney() {
    console.log('big cash 🤑', AppState.money)
    snackService.addMoney()
  }

}
