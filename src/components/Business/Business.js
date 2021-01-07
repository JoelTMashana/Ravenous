//Import react relevant files
import React from 'react';
import './Business.css'

//build object which we will acess in the component

//build the react component
class Business extends React.Component {
     render(){
      const { business} = this.props;   
      return (
          <div className="Business">
            <div className="image-container">
              <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
            </div>
            <h2>{this.props.business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <p>{this.props.business.address}</p>
                <p>{this.props.business.city}</p>
                <p>{this.props.business.zipCode}</p>
              </div>
              <div className="Business-reviews">
                <h3>{this.props.business.category}</h3>
                <h3 className="rating">{business.rating}</h3>
                <p>{this.props.business.reviewCount}</p>
              </div>
            </div>
          </div>
         );
     }
}

//make the react component accessible to the rest of the ravenous
export default Business;
