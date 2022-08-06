
export class Client {
  firstName!: String;
  lastName!: String;
  email!: String;
  password!: String;
  adressL!: String;
  User!: Client;


	constructor(firstName:String,lastName:String,email:String,password:String,adressL:String) {

    this.firstName =firstName ;
    this.lastName = lastName ;
    this.email = email ;
    this.password = password ;
    this.adressL = adressL ;

	}


}
