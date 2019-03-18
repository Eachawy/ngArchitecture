export class ServiceModel {
  id: number;
  nameLang1: string;
  nameLang2: string;
  descriptionLang1: string;
  descriptionLang2: string;
  code: string;
  anotherBusinesObject: {
    id: number,
    descriptionLang1: string,
    descriptionLang2: string
  };


  constructor(id: number, nameLang1: string, nameLang2: string, descriptionLang1: string, descriptionLang2: string, code: string, anotherBusinesObject: { id: number; descriptionLang1: string; descriptionLang2: string }) {
    this.id = id;
    this.nameLang1 = nameLang1;
    this.nameLang2 = nameLang2;
    this.descriptionLang1 = descriptionLang1;
    this.descriptionLang2 = descriptionLang2;
    this.code = code;
    this.anotherBusinesObject = anotherBusinesObject;
  }
}
