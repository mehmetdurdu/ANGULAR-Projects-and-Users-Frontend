import { ResponseModel } from './responseModel';

//tek data (obje) geldiğinde kullanmak için
export interface SingleResponseModel<T> extends ResponseModel {
  data: T;
}
