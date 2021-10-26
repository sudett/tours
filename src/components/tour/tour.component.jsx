import React from "react";

import "./tour.styles.css";

export default class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moreText: false,
    };
  }

  render() {
    const { image, name, info, price, id } = this.props;
    const { moreText } = this.state;

    return (
      <div className="tour">
        <div
          className="tour-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="content">
          <div className="title">
            <h4 className="tour-city">{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <div className="tour-info">
            {moreText ? info : info.slice(0, 200).concat("...")}
            <button
              className="btn-blue"
              onClick={() => this.setState({ moreText: !moreText })}
            >
              {moreText ? "Show less" : "Read more"}
            </button>
          </div>
          <button className="btn">Not interested</button>
        </div>
      </div>
    );
  }
}
