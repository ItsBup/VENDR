export class Snack {
  constructor(data) {
  this.name = data.name
  this.price = data.price
  this.imgUrl = data.imgUrl
  }

  get snackCard(){
    return `
      <div class="row">
        <div class="card p-2 border border-dark shadow bg-white rounded col-4" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Product Name</h5>
            <p class="card-text">Pricing</p>
            <button class="btn btn-dark">BUY NOW</button>
          </div>
        </div>
      </div>
    `
  }
}