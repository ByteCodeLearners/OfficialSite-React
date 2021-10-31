import React from 'react';

const SocialMediaCard = (props) => {
    return ( 
        <div className="social-media-card">
           {props.fbsrc?<iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBytecodeLearners-103644071079006%2F&tabs=timeline&width=310&height=420&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>:null}
           {props.instasrc?<div class="elfsight-app-374005f4-2ae5-4d39-a083-d8f560628e8c"></div>:null}
           {props.twittersrc?<div><a class="twitter-timeline" href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw">Tweets by ByteCodeLearner</a>
           <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>:null}
        </div>
     );
}
 
export default SocialMediaCard;