import { Image } from "./image";

export class CarDTO {
  id: number;
  name: string;
  model: string;
  nb_doors: number;
  nb_places: number;
  address: string;
  description: string;
  price_per_day: number;
  registration_num: string;
  gearbox: string;
  photo?: File;
  imageData?: string;
  fileType?: string;

  constructor(car: any) {
    this.id = car.id;
    this.name = car.name;
    this.model = car.model;
    this.nb_doors = car.nb_doors;
    this.nb_places = car.nb_places;
    this.address = car.address;
    this.description = car.description;
    this.price_per_day = car.price_per_day;
    this.registration_num = car.registration_num;
    this.gearbox = car.gearbox;
    this.photo = car.photo;
    this.imageData = car.imageData;  
    this.fileType = car.fileType;

  }
}

