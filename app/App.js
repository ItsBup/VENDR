import { SnacksController } from './controllers/SnacksController.js';

class App {

  SnacksController = new SnacksController
}


const app = new App()
// @ts-ignore
window.app = app
