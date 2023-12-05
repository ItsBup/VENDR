export class Snack {
  constructor(data) {
  this.name = data.name
  this.price = data.price
  this.imgUrl = data.imgUrl
  }

  get snackCard(){
    return `
      <div class="col-4">
        <div class="card mt-3 mb-3 p-2 border border-dark shadow bg-white rounded" style="width: 18rem;">
          <img src="${this.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">$${this.price}</p>
            <button class="btn btn-dark" onclick="app.SnacksController.buySnack('${this.name}')">BUY NOW</button>
          </div>
        </div>
      </div>    
    `
  }
}
