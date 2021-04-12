import * as React from 'react';
import { GlobalContainer } from '../../portal/pages/GlobalContainer';
import { withRouter, RouteComponentProps } from 'react-router';
import { withContext } from '../../portal/components/WithContext';
import '../../style.scss';



interface IProps {
    container: GlobalContainer;
    prop ? : (e: any) => any;
}

interface IState {
string : string

}

class Cart extends React.Component<IProps & RouteComponentProps, IState> {
    constructor(props: IProps & RouteComponentProps) {
        super(props);
        this.state = {
string:''
        };
    }

    componentDidMount() {

    }

   closeInfo = (e: any) => {
       this.props.prop(e)
    };

    render() {

        return (
            <div>
                <div className=" sidenav   sidewidth " style={{ color: "#707070" }}>
                    <div
                        className={` h-auto litem   `}
                        style={{ marginTop: "10px", color:'black' }}
                    >
                        <span style={{ margin:'10px'}}> Your Cart </span>
                        <button
                            className="btn btn-light"
                            style={{
                                marginRight: "10px",
                                position: "relative",
                                top: "-10px",
                                backgroundColor: "Transparent",
                                float: "right"
                            }}
                            onClick={this.closeInfo}
                        >
                         Continue Shopping
                        </button>
 <div className={"minicart "}>
     {this.props.container.state.Products.map( (p : any) =>{
         return(
             <div key={p.id}>
             <ul className={"minicart__list"}>

                 <li className={" minicart-line-item "}>
                     <div>{p.title}</div>
                     <div className={"row"}>
                         <div className={"col"}>
                     <img src={`${p.url}`} style={{margin: "10px"}} />
                     </div>
                     <div  className={"col"}>
                         <div>
                    price : {p.Price}
                         </div>
                         <div style={{marginTop: "10px"}}>
                     size: { p.Size}
                         </div>
                     </div>
                     </div>
                 </li>
             </ul>
         </div>
         )
     } ) }





 </div>


                    </div>

                </div>

            </div>
        );
    }
}

export default withContext(GlobalContainer)(withRouter(Cart));
