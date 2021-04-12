import { Children } from 'react';

interface GlobalState {
  Products : Product[]
}

class Product {
  id :  number
  title : string
  Category : string
  url:  string
  Price : number
  Size: string
}


export { GlobalState, Product };
