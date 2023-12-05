import { AppState } from "../AppState.js"
import { snackService } from "../services/SnackService.js"

export class SnacksController {
  constructor() {
    console.log('The SnacksController has loaded')
    this.drawSnacks()
    AppState.on('money', this.drawTotalCash)
  }

  drawTotalCash(){
    let content = AppState.money
    document.getElementById('total-cash').innerHTML = '$'+content
  }

  drawSnacks(){
    console.log('man im hungry')
    const snacks = AppState.snacks
    let content = ''
    snacks.forEach(snack => content += snack.snackCard)
    document.getElementById('all-snacks').innerHTML = content 
  }

  addMoney() {
    console.log('big cash 🤑', AppState.money)
    snackService.addMoney()
  }

}
