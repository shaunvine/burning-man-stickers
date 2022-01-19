// https://www.npmjs.com/package/react-back-to-top-button

import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
import { FaArrowCircleUp } from "react-icons/fa";
class  BackToTopBtn extends Component {
  render() {
    return (
      <BackToTop
        // showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <FaArrowCircleUp />
      </BackToTop>
    );
  }
}
export default BackToTopBtn;
