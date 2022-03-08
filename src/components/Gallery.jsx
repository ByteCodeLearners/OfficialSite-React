import { useEffect, useState  } from 'react';
import '../styles/gallery.css'
// import plus_sign from '../images/plus.jpg'
const Gallery = () => {
    const lightBox = ()=>{
        var lb = document.querySelector('.light-box');
        var imgs = document.querySelectorAll('.gallery-img');
        imgs.forEach((img)=>{
        img.addEventListener("click",()=>{
                console.log("skdj");
                lb.classList.add('active-light-box');
                const image = document.createElement('img');
                image.src = img.src;
                while(lb.firstChild){
                    lb.removeChild(lb.firstChild);
                }
                lb.appendChild(image);
            })
        })

        lb.addEventListener('click',(e)=>{
        if(e.target !== e.currentTarget) return;
        lb.classList.remove('active-light-box');
        })
    }
    useEffect(()=>{
        lightBox();
    },[])
    const images = [
        'https://www.bytecodelearners.tech/statics/event2022_pic1.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic2.jpeg',
        'https://www.bytecodelearners.tech/statics/fresh2.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic4.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic3.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic6.jpeg',
        'https://www.bytecodelearners.tech/statics/fresh1.jpeg',
        'https://www.bytecodelearners.tech/statics/fresh3.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic5.jpeg',
        
    ];
    const fresherImgs = [
        'https://www.bytecodelearners.tech/statics/fresh4.jpeg',
        'https://www.bytecodelearners.tech/statics/fresh5.jpeg',
        'https://www.bytecodelearners.tech/statics/g3.jpg',
        'https://www.bytecodelearners.tech/statics/fresh6.jpeg',
        'https://www.bytecodelearners.tech/statics/g1.jpg',
        'https://www.bytecodelearners.tech/statics/g5.jpg',
        'https://www.bytecodelearners.tech/statics/g6.jpg',
        
    ];
    const [clicked,setClicked] = useState(false);
    const handleNextSlide = ()=>{
        setClicked(!clicked);
        // document.getElementById('slide1')?document.getElementById('slide1').classList.toggle('move_slides'):document.getElementById('slide2').classList.toggle('move_slides');
    }
    return ( 
        <div className="gallery" id="Gallery">
            <h1>Event Gallery</h1>
            <div className="events-galllery-imgs">

                {
                    clicked?
                    <div id='slide1'  className="images move_slides">
                    {fresherImgs.map((img,index)=>{return <img className='gallery-img' key={index} src={img} alt=""/>})}
                    <p onClick={()=>{setClicked(!clicked)}} className="more_images" >More Images ➡️ </p>
                </div>
                : <div id='slide2' className="images move_slides">
                {images.map((img,index)=>{return <img className='gallery-img' key={index} src={img} alt=""/>})}
                <p onClick={handleNextSlide} className="more_images">More Images ➡️ </p>
                </div>
                }

            </div>
            <div className="light-box">.</div>
        </div>
     );
}
 
export default Gallery;