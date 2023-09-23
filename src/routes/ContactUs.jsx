import React, { useEffect } from "react";
import { sticky } from "../components/Navbar";
const ContactUs = () => {
  useEffect(() => {
    sticky();
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="contact-us">
      <div className="heading">
        <h3>Social Media Feeds</h3>
      </div>
      <div className="boxes">
        <div className="rectangle">
          <div className="ions">
            <a href="https://www.facebooke.com" className="facebook social">
              {/* <FontAwesomeIcon icon={faFacebook} size="3x" /> */}
              <i className="fab fa-facebook box-icons"></i>
            </a>
          </div>

          <div className=" fb">
            <div className="event-container">
              <div className="container">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBytecodeLearners-103644071079006%2F&tabs=timeline&width=320&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="contact-us"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="rectangle">
          <div className=" inst">
            <div className="ions1">
              <a href="https://www.instagram.com" className="instagram social">
                <i className="fab fa-instagram box-icons"></i>
              </a>
            </div>
            <div>
              <div className="event-container">
                <div className="container">
                  <div className="scroller">
                    <ul>
                      <div className="elfsight-app-41f24f40-af42-4831-abdf-d8732bba57e8"></div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rectangle2">
          <div className=" twit">
            <div className="ions2">
              <a
                href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
                className="twitter social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faTwitter} size="3x" /> */}
                <i className="fab fa-twitter box-icons"></i>
              </a>
            </div>
            <div className="container">
              <div className="scroller">
                <ul>
                  <a
                    className="twitter-timeline twitter-embed"
                    href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
                    data-show-count="false"
                  >
                    Tweets by ByteCodeLearner
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
