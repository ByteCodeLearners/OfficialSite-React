import React, { useEffect } from 'react';
import { sticky } from '../components/Navbar';
const ContactUs = () => {
    useEffect(()=>{
        sticky();
        },[]);
    return ( 
        <div className="contact-us">
            <div className="heading">
                <h3>Socail Media Feeds</h3>
            </div>
            <div className="boxes">
                <div className="rectangle">
                <div className="ions">
                    <a href="#" className="facebook social">
                    {/* <FontAwesomeIcon icon={faFacebook} size="3x" /> */}
                    <i className="fab fa-facebook box-icons"></i>
                    </a>
                </div>

                <div className=" fb">
                    <h2>FACEBOOK FEEDS</h2>

                    <div className="event-container">
                    ==
                    <div className="container">
                        <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBytecodeLearners-103644071079006%2F&tabs=timeline&width=380&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    </div>
                </div>
                </div>

                <div className="rectangle1">
                <div className=" inst">
                    <div className="ions">
                        <a href="#" className="instagram social">
                            {/* <FontAwesomeIcon icon={faInstagram} size="3x" /> */}
                            <i className="fab fa-instagram box-icons"></i>
                        </a>
                    </div>

                    <h2>INSTAGRAM FEEDS</h2>
                    <scrollbar>
                    <div className="event-container">
                        ==
                        <div className="container">
                        <div className="scroller">
                            <ul>
                            <script
                                src="https://apps.elfsight.com/p/platform.js"
                                defer
                            ></script>
                            <div class="elfsight-app-374005f4-2ae5-4d39-a083-d8f560628e8c"></div>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </scrollbar>
                </div>
                </div>

                <div className="rectangle2">
                <div className=" twit">
                    <div className="ions">
                    <a
                        href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
                        className="twitter social"
                    >
                        {/* <FontAwesomeIcon icon={faTwitter} size="3x" /> */}
                        <i className="fab fa-twitter box-icons"></i>
                    </a>
                    </div>

                    <h2>TWITTER FEEDS</h2>
                    <div className="container">
                    <div className="scroller">
                        <ul>
                        <a
                            class="twitter-timeline"
                            href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
                        >
                            Tweets by ByteCodeLearner
                        </a>
                        <script
                            async
                            src="https://platform.twitter.com/widgets.js"
                            charset="utf-8"
                        ></script>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;