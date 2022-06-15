import { ResponseModel } from './responseModel';

//liste şeklinde data geldiğinde kullanmak için
export interface ListResponseModel<T> extends ResponseModel {
  data: T[];
}
