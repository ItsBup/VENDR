import { SnacksController } from './controllers/SnacksController.js';
import { router } from './router-config.js';

class App {

  router = router

  SnacksController = new SnacksController
}


const app = new App()
// @ts-ignore
window.app = app
