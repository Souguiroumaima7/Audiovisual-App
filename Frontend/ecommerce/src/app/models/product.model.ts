export class Product {
  name:String ;
  description:String ;
  price:String ;
  galleries!:[] ;
  orders!:[] ;


  constructor(name:String,description:String , price:String) {
    this.name = name ;
    this.description = description
    this.price = price ;
 }

}
