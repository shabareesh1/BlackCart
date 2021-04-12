import * as React from 'react';
import { GlobalContainer  , Product} from '../GlobalContainer';
import { withRouter, RouteComponentProps } from 'react-router';
import { withContext } from '../../components/WithContext';
import '../../../style.scss';
import Cart from "../../components/Cart";



interface IProps {
  container: GlobalContainer;
}

interface IState {

    Sizechecked : string
    cardtClicked : boolean

}

class CheckoutPage extends React.Component<IProps & RouteComponentProps<{ viewId: string }>, IState> {
  constructor(props: IProps & RouteComponentProps<{ viewId: string }>) {
    super(props);
    this.state = {
        Sizechecked :'7',
        cardtClicked : false
    };
  }

  componentDidMount() {
  }

    handleChange = (i : any) =>{
        const id = i;
        setTimeout(() => {
            const element: HTMLElement = document.getElementById(id) as HTMLElement;
            if (element !== null && element !== undefined) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);


    }

    handleCart  =() =>{

       this.setState({
           ...this.state , cardtClicked : !this.state.cardtClicked
       } )
    }

    onValueChange = (event : any) => {
        this.setState({
          ...this.state,   Sizechecked: event.target.value
        } ,()=>{

           // console.log(this.state.Sizechecked)
        });
    }

    AddtoCart = () =>{
        const item ={
            id : Math.random(),
            title : 'CARPI TRIPLE WHITE' ,
            Category : 'Mens ' ,
            url: './image1.jpg',
          Price : 256,
            Size : this.state.Sizechecked
        } as Product

        this.props.container.AddProducttoCOntainer(item)
        this.handleCart()
    }

  render() {

    return (
      <div>
        <div className="main  ">
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#fffff'}}>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <a className="navbar-brand" href="#" style={{ fontWeight:700 , fontSize:'30px'}}>KOIO</a>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <a className="nav-link" href="#">Shop men <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#"> Shop Women</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link " href="#">About </a>
                          </li>
                      </ul>

                      <div className="form-inline my-2 my-lg-0">
                          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className="nav-item ">
                                  <a className="nav-link" href="#"> Locations <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">  CraftmanShip</a>
                              </li>
                              <li className="nav-item"  onClick={this.handleCart}>
                                  <a className="nav-link " href="#"> Cart ({this.props.container.state.Products.length}) </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              {this.state.cardtClicked && <Cart  prop={this.handleCart} />  }
          </div>
            <div className=" Content container-fluid">
                <div className={'row'} style={{height :"100%"}} >
                <div className={'col Productimages'}>
                    <div  className=' row'>
                        <div className={"col"}>
                            <div>
                                <img className="image" onClick={() => this.handleChange('0')} src="./image1.jpg" />
                            </div>
                            <div>
                                <img className="image" onClick={() => this.handleChange('1')} src="./image2.png.jpg" />
                            </div>
                            <div>
                                <img className="image"  onClick={() => this.handleChange('2')} src="./image3.png" />
                            </div>
                            <div>
                                <img className="image"   onClick={() => this.handleChange('0')} src="./image1.jpg" />
                            </div>
                            <div>
                                <img className="image"  onClick={() => this.handleChange('1') } src="./image2.png.jpg" />
                            </div>
                        </div>

                        <div className={"col"}>
                            {/*
                                <img  className={"imageStyle"} src={`${this.state.Selectedimage==='0' ? './large1.png' :
                                    this.state.Selectedimage==='1' ? './large2.png' : "./large3.png" 
                                }`}  />
                                */}
                            <img  className={"imageStyle"} id="0" src ="./large1.png" />
                            <img  className={"imageStyle"} id="1" src ="./large2.png" />
                            <img  className={"imageStyle"} id="2" src ="./large3.png "/>
                        </div>

                    </div>


                </div>
                <div className={'col Productdetails'}>
                    <header id = 'product-header'>
                    <span>
                        Men's
                    </span>
                    <div>
                        CAPRI TRIPLE WHITE
                    </div>
                        <span className="product-pricing">
          <span className="product-price">$268</span>

      </span>
                    </header>

                    <div
                        className="product-option-row product-option-row--productes product-option-row--7 product-option-row--size ">
                        <h5 className="product-header">Size:</h5>


                        <div className="product-element product-element--7-us-40-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-7-us-40-eu"
                                   value="7 " data-index="option1" className="single-option-select" checked={this.state.Sizechecked === "7"}
                                   onChange={this.onValueChange} />
                                <label htmlFor="product-1-7-us-40-eu" data-size="7" tabIndex={0}
                        style={{ border: `${this.state.Sizechecked === "7" ? '2px solid black' : 'none'}` }} >7</label>
                </div>

                        <div className="product-element product-element--8-us-41-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-8-us-41-eu"
                                   value="8 " data-index="option1" className="single-option-select" checked={this.state.Sizechecked == "8"}
                                   onChange={this.onValueChange}   />
                                <label htmlFor="product-1-8-us-41-eu" data-size="8" tabIndex={0}  style={{ border: `${this.state.Sizechecked === "8" ? '2px solid black' : 'none'}` }}>8</label>
                        </div>


                        <div className="product-element product-element--9-us-42-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-9-us-42-eu"
                                   value="9 " data-index="option1" className="single-option-select" checked={this.state.Sizechecked === "9"}
                                   onChange={this.onValueChange}   />
                                <label htmlFor="product-1-9-us-42-eu" data-size="9" tabIndex={0}  style={{ border: `${this.state.Sizechecked === "9" ? '2px solid black' : 'none'}` }}>9</label>
                        </div>


                        <div className="product-element product-element--10-us-43-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-10-us-43-eu"
                                   value="10 " data-index="option1" className="single-option-select"checked={this.state.Sizechecked === "10"}
                                   onChange={this.onValueChange}   />
                                <label htmlFor="product-1-10-us-43-eu" data-size="10" tabIndex={0}  style={{ border: `${this.state.Sizechecked === "10" ? '2px solid black' : 'none'}` }}>10</label>
                        </div>


                        <div className="product-element product-element--11-us-44-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-11-us-44-eu"
                                   value="11 " data-index="option1" className="single-option-select" checked={this.state.Sizechecked === "11"}
                                   onChange={this.onValueChange}  />
                                <label htmlFor="product-1-11-us-44-eu" data-size="11" tabIndex={0}  style={{ border: `${this.state.Sizechecked === "11" ? '2px solid black' : 'none'}` }}>11</label>
                        </div>


                        <div className="product-element product-element--12-us-45-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-12-us-45-eu"
                                   value="12 " data-index="option1" className="single-option-select" checked={this.state.Sizechecked === "12"}
                                   onChange={this.onValueChange}  />
                                <label htmlFor="product-1-12-us-45-eu" data-size="12" tabIndex={0}
                                       style={{ border: `${this.state.Sizechecked === "12" ? '2px solid black' : 'none'}` }}>12</label>
                        </div>


                        <div className="product-element selected-product product-element--13-us-46-eu">
                            <input type="radio" name="single-option-select-1" id="product-1-13-us-46-eu"
                                   value="13 (US) / 46 (EU)" data-index="option1" className="single-option-select"
                                   checked={this.state.Sizechecked === "13"}
                                   onChange={this.onValueChange} />
                                <label htmlFor="product-1-13-us-46-eu" data-size="13" tabIndex={0}
                                       style={{ border: `${this.state.Sizechecked === "13" ? '2px solid black' : 'none'}` }}>13</label>
                        </div>

                    </div>


                    <div id="product-purchase-row" className="product-option-row ">

                        <button name="add" id="add-to-cart" type="submit" className="btn btn--black btn--block"
                                aria-label="Add to Cart" onClick={this.AddtoCart }>
                                <span className="minicart-add-to-cart-text" id="add-to-cart-text"
                                      data-add-to-cart-text="Add To Cart">Add To Cart</span>
                        </button>

                    </div>
                    <div className="accordion" id="accordionExample">

                        <div className="card" style={{ border: 'none'}}>
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn " type="button" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Product Description
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                 data-parent="#accordionExample">
                                <div className="card-body">
                                    Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks  fresh or curiously banged up: your choice.
                                    Snag yourself a pair before you go out of style.
                                </div>
                            </div>
                        </div>
                    </div>




                </div>



                </div>


            </div>

        </div>

      </div>
    );
  }
}

export default withContext(GlobalContainer)(withRouter(CheckoutPage));
