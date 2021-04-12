import { Container } from 'unstated';
import { GlobalState, Product } from './GlobalState';

class GlobalContainer extends Container<GlobalState> {
  constructor() {
    super();
  }

  state = {
 Products : []
  } as GlobalState;


AddProducttoCOntainer ( i : any) {

   const newArray = [...this.state.Products];
   newArray.push(i);
   this.setState({...this.state , Products: newArray}, ()=>{
   })

}

}

export { GlobalContainer , Product };
