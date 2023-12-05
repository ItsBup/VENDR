import { AppState } from "../AppState.js";


class SnackService{
  addMoney(){
    AppState.money += 100
  }
  buySnack(snackName){
    let foundSnack = AppState.snacks.find(snack => snack.name == snackName)
    AppState.money -= foundSnack.price
  }
}

export const snackService = new SnackService()