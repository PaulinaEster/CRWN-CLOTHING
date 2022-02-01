import react from "react";
import { Component } from "react/cjs/react.development";
import { SHOP_DATA } from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {

  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }

  }

  render() {
    /* const { collections } = this.state; */
    return (
      <div className="shop-page">

        {
          this.state.collections.map(collection => (
          
            <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
          
          ))
        }

      </div>
    )
  }

}

export default ShopPage;
