import { AppState } from "../AppState.js"
import { snackService } from "../services/SnackService.js"

export class SnacksController {
  constructor() {
    console.log('The SnacksController has loaded')
    AppState.on('money', this.drawTotalCash)
  }

  drawTotalCash(){
    let content = AppState.money
    document.getElementById('total-cash').innerHTML = '$'+content
  }

  addMoney() {
    console.log('big cash 🤑', AppState.money)
    snackService.addMoney()
  }

}
