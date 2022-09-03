
export class Order {
  ref:String ;
  priceTotal:String ;
  date:String ;
  status:String ;



  constructor(ref:String,priceTotal:String,date:String,status :String) {

    this.ref = ref ;
    this.priceTotal = priceTotal ;
    this.date = date ;
    this.status = status ;

  }
}
