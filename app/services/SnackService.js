import { AppState } from "../AppState.js";


class SnackService{
  addMoney(){
    AppState.money += 100
  }
  buySnack(snackName){
    let snackPrice = AppState.snacks.find(snack => snack.price == snackName)
    AppState.money -= snackPrice
  }
}

export const snackService = new SnackService()