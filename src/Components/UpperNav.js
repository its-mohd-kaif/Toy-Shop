import React, { memo } from "react";
import img1 from "../images/uimg1.png";
import img2 from "../images/uimg2.png";
import img3 from "../images/uimg3.png";
import "./UpperNav.css";
function UpperNav() {
  return (
    <div>
      {/* Carousel Container */}
      <div className="main-task3">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src={img1} alt="Los Angeles" className="imgUpperNav" />
            </div>

            <div className="item">
              <img src={img2} alt="Chicago" className="imgUpperNav" />
            </div>

            <div className="item">
              <img src={img3} alt="New york" className="imgUpperNav" />
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(UpperNav);
