import React from "react";
import "./style.css";
import main from "../../assets/main.png";
import menuMain from "../../assets/menu-main.png";
import spoonSpice from "../../assets/SpoonSpices.png";
import cuisineRight from "../../assets/cuisine-right.png";
import cuisineLeft from "../../assets/cuisine-left.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";


const Index = () => {
  return (
    <div className="flex-container">
      <div className="navbar">
        <div className="head-image">
          <img src={main} />
        </div>
        <div className="main-nav">
          <div className="navbar-logo">BRUNCH</div>
          <div className="navbar-main-text">
            <div className="navbar-text">Welcome</div>
            <div className="navbar-text">Menu</div>
            <div className="navbar-text">Events</div>
            <div className="navbar-text">Contact</div>
          </div>
        </div>
        <div className="image-center-text">s</div>
      </div>

      <div className="flex-row">
        <div className="traditional">
          <div className="traditional-text">
            <h2>Indian traditional flavours</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover
            </p>
          </div>
          <div className="traditional-image">
            <img src={spoonSpice} />
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div className="third-row">
          <div className="col-one">
            <div className="ellipse"></div>
            <h2>New Tastes</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-two">
            <div className="ellipse-main">
              <div className="ellipse"></div>
              <div className="ellipse"></div>
            </div>
            <h2>New Spices</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="col-three">
            <div className="ellipse-main">
              <div className="ellipse"></div>
              <div className="ellipse"></div>
              <div className="ellipse"></div>
            </div>
            <h2>New Dishes</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>

      <div className="flex-row">
        <div
          className="menu"
          style={{
            backgroundImage: `url(${menuMain})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            // width: "100%",
            backgroundSize:"100% 100%",
          }}
        >
          <div className="menu-child">
            <div className="grand-child-head">
              <h1>PAKISTAN</h1>
              <h2>ON YOUR PLATE</h2>
            </div>
            <div className="grand-child-content">
              <div className="card">
               <img src={one}/>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
            </div>

            <div className="grand-child-content">
              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
            </div>

            <div className="grand-child-content">
              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>

              <div className="card">
                <h3>Tikka Chicken</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <h3>$14.96</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="cuisine-row">
          <div className="cuisine-left">
            <img src={cuisineLeft} />
          </div>
          <div className="cuisine-right">
            <img src={cuisineRight} />
          </div>
          <div className="cuisine-row2">
            <div className="cuisine-row-text">
              <h2>Traditional cuisine made easy</h2>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="ellipse-main-cuisine">
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
              </div>
              {/* <div className="cuisine-end">
                <div className="cuisine-text">Meals</div>
                <div className="cuisine-text">Spices</div>
                <div className="cuisine-text">Book</div>
                <div className="cuisine-text">Gallery</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
