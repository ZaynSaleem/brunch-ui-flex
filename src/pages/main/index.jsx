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
import newMenu from "../../assets/newMenu.png";
import chicken from "../../assets/chicken.png";
import curry from "../../assets/curry.png";
import choleBhature from "../../assets/chole-bhature.png";
import laddu from "../../assets/laddu.png";
import double from "../../assets/double.png";
import chapati from "../../assets/chapati.png";
import EndMain from "../../assets/endMain.png";
import imageBig from "../../assets/imageBig.png";
import cardImage1 from "../../assets/cardImage1.png";
import cardImage2 from "../../assets/cardImage2.png";
import cardImage3 from "../../assets/cardImage3.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import printest from "../../assets/printest.png";
import gPlus from "../../assets/gPlus.png";
import quotation from "../../assets/quotation.png";

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
            backgroundSize: "100% 100%",
          }}
        >
          <div className="menu-child">
            <div className="grand-child-head">
              <h1>PAKISTAN</h1>
              <h2>ON YOUR PLATE</h2>
            </div>
            <div className="grand-child-content">
              <div className="card">
                <img src={one} />
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
                <img src={two} />
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
                <img src={three} />
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
                <img src={four} />
              </div>
            </div>

            <div className="grand-child-content">
              <div className="card">
                <img src={five} />
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
                <img src={six} />
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

      <div className="new-menu">
        <div className="new-menu-row1">
          <img src={newMenu} />
        </div>
        <div className="new-menu-content-row">
          <div className="new-menu-head">
            <h1>DISCOVER</h1>
            <h2>OUR NEW MENU</h2>
          </div>
          <div className="menu_row">
            <div className="menu_leftbox menu_col">
              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={chicken} />
                </div>
                <div className="content_box">
                  <h4> Tikka chicken</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>

              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={laddu} />
                </div>
                <div className="content_box">
                  <h4>laddu</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>

              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={choleBhature} />
                </div>
                <div className="content_box">
                  <h4>Chole Bhature</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>
            </div>

            <div className="menu_rightbox menu_col">
              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={chapati} />
                </div>
                <div className="content_box">
                  <h4>Chapati</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>

              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={curry} />
                </div>
                <div className="content_box">
                  <h4>Curry</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>

              <div className="new-menu-content-child">
                <div className="icon_box">
                  <img src={double} />
                </div>
                <div className="content_box">
                  <h4>Double</h4>
                  <p>LOREM IMPSUM DLISDLHSUDGKJOIEKSKDHSUHDKS:JDD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="end_main_image">
        <img src={EndMain} />
      </div>

      <div className="booking_box">
        <div className="booking_head">
          <div className="booking_text">
            <h1>Book Here</h1>
          </div>
        </div>
        <div className="booking_form_left booking_col">
          <div className="booking_forms">
            <div className="booking_label">
              <h4>How Many people?</h4>
            </div>
            <div className="booking_input">
              <input type="text" placeholder="2 people" />
            </div>
          </div>

          <div className="booking_forms">
            <div className="booking_label">
              <h4>Name?</h4>
            </div>
            <div className="booking_input">
              <input type="text" placeholder="Full name" />
            </div>
          </div>
        </div>

        <div className="booking_form_middle booking_col">
          <div className="booking_forms">
            <div className="booking_label">
              <h4>When is your date?</h4>
            </div>
            <div className="booking_input">
              <input type="date" name="date" id="" />
            </div>
          </div>

          <div className="booking_forms">
            <div className="booking_label">
              <h4>Email</h4>
            </div>
            <div className="booking_input">
              <input type="email" placeholder="Your Email Address" />
            </div>
          </div>
          <div className="booking_forms">
            
          </div>
        </div>

        <div className="booking_form_right booking_col">
          <div className="booking_forms">
            <div className="booking_label">
              <h4>Time</h4>
            </div>
            <div className="booking_input">
              <input type="time" name="time" id="" />
            </div>
          </div>

          <div className="booking_forms">
            <div className="booking_label">
              <h4>Phone</h4>
            </div>
            <div className="booking_input">
              <input type="number" placeholder="Your phone" />
            </div>
          </div>
        </div>
        <div className="booking_button">
              <button>SUBMIT</button>
            </div>
      </div>

      <div className="end_main_image">
        <img src={imageBig} />
      </div>

      <div className="discover_box">
        <div className="discover_head">
          <div className="discover_tile">
            <h1>DISCOVER</h1>
            <h2>OUR NEW MENU</h2>
          </div>
        </div>

        <div className="discover_card">
          <div className="discover_card_image">
            <img src={cardImage1} />
          </div>
          <div className="discover_card_content">
            <h4>Food / 16th March, 2019</h4>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              lorem ipsum dolor sit amet, consecture adispicibg ejdsajk
              consecture adispicibg ejdsajk
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="discover_card">
          <div className="discover_card_image">
            <img src={cardImage2} />
          </div>
          <div className="discover_card_content">
            <h4>Food / 16th March, 2019</h4>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              lorem ipsum dolor sit amet, consecture adispicibg ejdsajk ,
              consecture adispicibg ejdsajk
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="discover_card">
          <div className="discover_card_image">
            <img src={cardImage3} />
          </div>
          <div className="discover_card_content">
            <h4>Food / 16th March, 2019</h4>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              lorem ipsum dolor sit amet, consecture adispicibg ejdsajk ,
              consecture adispicibg ejdsajk
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div className="social_box">
        <div className="social_head">
          <img src={quotation} />
        </div>
        <div className="social_content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
        </div>
        <div className="social_name">
          <h4>Linda Steward</h4>
        </div>
        <div className="social_icons">
          <div className="icon">
            <img src={fb} />
          </div>
          <div className="icon">
            <img src={twitter} />
          </div>{" "}
          <div className="icon">
            <img src={insta} />
          </div>{" "}
          <div className="icon">
            <img src={printest} />
          </div>{" "}
          <div className="icon">
            <img src={gPlus} />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_content_main footer_col_main">
          <div className="about">
            <h2>About</h2>
          </div>
          <div className="footer_child">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        <div className="footer_content footer_col">
          <div className="about">
            <h2>About</h2>
          </div>
          <div className="footer_child">
            <h2>Team</h2>
            <h2>Join us</h2>
            <h2>Ethic</h2>
            <h2>Goals</h2>
          </div>
        </div>

        <div className="footer_content footer_col">
          <div className="about">
            <h2>About</h2>
          </div>
          <div className="footer_child">
            <h2>Team</h2>
            <h2>Join us</h2>
            <h2>Ethic</h2>
            <h2>Goals</h2>
          </div>
        </div>

        <div className="footer_content footer_col">
          <div className="about">
            <h2>About</h2>
          </div>
          <div className="footer_child">
            <h2>Team</h2>
            <h2>Join us</h2>
            <h2>Ethic</h2>
            <h2>Goals</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
