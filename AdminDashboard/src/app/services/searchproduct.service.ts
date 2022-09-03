import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchproductService {
  listproduct!:any[];
 comments!:any[];
  private keyword:any;

  constructor() {
    this.listproduct = [
      {
        id : "62dea6155b6098ca0f8cbb9f" ,
        name:"Paire de haut-parleurs actifs 54 W",
        description:"nouvelle collection",
        price:"4449.89",
        galleries: [
          {
              name: "photo16587586776561658758677656-image2.jpg",
              description: "add prod",
              id: "62dea6155b6098ca0f8cbba0"
          }
      ],
      },
      {
        id:"62dea6555b6098ca0f8cbba2",
        name:"Barre de son active 100 W",
        description:"nouvelle collection",
        price:"1569.07",
        galleries: [
          {
              name: "photo16587587410351658758741035-image1.jpg",
              description: "add prod",
              id: "62dea6555b6098ca0f8cbba3"
          }
      ],
      },
      {
        id:"62dea6c45b6098ca0f8cbba5",
        name:"Amplificateur mixeur 2 x 50 W",
        description:"nouvelle collection",
        price:"364.02",
        galleries: [
          {
              name: "photo16587588522131658758852213-image.jpg",
              description: "add prod",
              id: "62dea6c45b6098ca0f8cbba6"
          }
      ],
      },
       {
        id:"62dea7305b6098ca0f8cbba8",
        name:"Paire de haut-parleurs muraux 3-directionnels",
        description:"nouvelle collection",
        price:"305",
        galleries: [
          {
              name: "photo16587589602091658758960209-image3.jpg",
              description: "add prod",
              id: "62dea7305b6098ca0f8cbba9"
          }
      ],
      },
      {
        id:"62dea87b5b6098ca0f8cbbae",
        name:"Amplificateur TC3 50 W",
        description:"nouvelle collection",
        price: "263.60",
        galleries: [
          {
              name: "photo16587591651481658759165148-image4.jpg",
              description: "add prod",
              id: "62dea7fd5b6098ca0f8cbbac"
          }
      ],
      },
      {
        id:"62deace95b6098ca0f8cbbb1",
        name:"HP pavilion",
        description:"nouvelle collection",
        price:"766,160",
         galleries: [
          {
              name: "photo16587592919551658759291955-image5.jpg",
              description: "add prod",
              id: "62dea87b5b6098ca0f8cbbaf"
          }
      ],
      },
      {
        id:"62dead645b6098ca0f8cbbb4",
        name:"PC PORTABLE DELL LATITUDE 7420 / I5 11È GÉN / 8 GO",
        description:"nouvelle collection",
        price:"3 299,000",
        galleries: [
          {
              name: "photo16587605484111658760548411-pc-portable-dell.jpg",
              description: "add prod",
              id: "62dead645b6098ca0f8cbbb5"
          }
      ],
      },
      {
        id:"62deadbc5b6098ca0f8cbbb7",
        name:"Webcam USB Xtrike Me XPC01",
        description:"nouvelle collection",
        price:"35.00",
        galleries: [
          {
              name: "photo16587606364141658760636414-webcam-usb-xtrike-me-xpc01.jpg",
              description: "add prod",
              id: "62deadbc5b6098ca0f8cbbb8"
          }
      ],
      },
      {
        id: "62deae135b6098ca0f8cbbba",
      name: "Enregistreur DashCam Avec Caméra Embarquée 5MP Pour Voiture Everest EVERCAR G20",
      description: "nouvelle collection",
      price: "109,000",
       galleries: [
          {
              name: "photo16587607230691658760723069-enregistreur-dashcam-avec-camera-embarquee-pour-voiture-everest-evercar-g20.jpg",
              description: "add prod",
               id: "62deae135b6098ca0f8cbbbb"
          }
      ],
      },

        {
          id: "62deae755b6098ca0f8cbbbd",
          name: "Vidéoprojecteur Professionnel 3LCD EPSON EB-E01",
          description: "nouvelle collection",
          price: "1 139,000",
          galleries: [
              {
                  name: "photo16587608215661658760821566-videoprojecteur-professionnel-3lcd-epson-eb-e01.jpg",
                  description: "add prod",
                   id: "62deae755b6098ca0f8cbbbe"
              }
          ],
      },
      {

        id: "62deaf575b6098ca0f8cbbc0",
        name: "Vidéo Projecteur Xiaomi Mi 4K Laser 150",
        description: "nouvelle collection",
        price: "5 999,000 DT",
        galleries: [
            {
                name: "photo16587610478451658761047845-video-projecteur-xiaomi-mi-4k-laser-150.jpg",
                description: "add prod",
                id: "62deaf575b6098ca0f8cbbc1"
            }
        ],
      },
         {
               id: "62deb0db5b6098ca0f8cbbc3",
                name: "Téléviseur Toshiba S25 32\" LED HD + Récepteur Intégré",
                description: "nouvelle collection",
                price: "569,000 DT",
                galleries: [
                    {
                        name: "photo16587614357111658761435711-televiseur-toshiba-s25-32-led-hd-recepteur-integre.jpg",
                        description: "add prod",
                        id: "62deb0db5b6098ca0f8cbbc4"
                    }
                ],
        },
        {
          "_id": "62deb1515b6098ca0f8cbbc6",
          "name": "TV TCL P715 55\" LED UHD 4K / Smart TV / ANDROID / Noir",
          "description": "nouvelle collection",
          "price": "1 959,000 DT",
          "galleries": [
              {
                  "name": "photo16587615532871658761553287-tv-tcl-p715-55-led-uhd-4k-smart-tv-android-noir.jpg",
                  "description": "add prod",
                  "_id": "62deb1515b6098ca0f8cbbc7"
              }
          ],
          "orders": [],
          "createdAt": "2022-07-25T15:05:53.294Z",
          "updatedAt": "2022-07-25T15:05:53.294Z",
          "__v": 0
      },
      {
          id: "62deb63f266a82d56d0446de",
          name: "Microphone Filaire JBL PBM100 / Noir",
          description: "nouvelle collection",
          price: "169,000",
          galleries: [
              {
                  name: "photo16587628159131658762815913-Microphone Filaire JBL PBM100.jpg",
                  description: "add prod",
                  id: "62deb63f266a82d56d0446df"
              }
          ],

      },

    {
          name: "canon camara",
          description: "nouvelle collection",
          price: "500.000 DT",
          galleries: [
              {
                  name: "photo16609036796431660903679643-canon camera.jpg",
                  description: "add prod",
                  id: "62ff60ff4f5463c005a18b0b"
              }
          ],
        }

    ]
  }

  getProductlist(){
    return this.listproduct;
  }

  getById(id:any){
    return this.listproduct[id];
  }
  getComments(){
    return this.comments;
  }
  getCommentsById(id:number){
    var ids:number=id;
    var comments:any[]=[];
    for(var i = 0;i<=this.comments.length-1;i++){
      if(this.comments[i].id==ids){
        comments.push(this.comments[i]);
        console.log(comments);
      }
    }
    return comments;
  }
  setkeyword(keyword:any){
    this.keyword=keyword;
  }
  getkeyword(){
    return this.keyword;
  }
}
