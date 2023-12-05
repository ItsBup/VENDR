import { AppState } from "../AppState.js";


class SnackService{
  addMoney(){
    AppState.money += 100
  }
}

export const snackService = SnackService()