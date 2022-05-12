export interface ICoffee {
  blend_name: string;
  id : number;
  intensifier: string;
  notes: string;
  origin: string;
  uid: string;
  variety: string
}

export type TResponseWithStatus = {
  loading : boolean;
  error : null | string;
  clearError : () => void
}

export type TRandomCoffeeListWithStatus ={
  response : Array<ICoffee>
} & TResponseWithStatus
