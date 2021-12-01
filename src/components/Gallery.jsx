import { useEffect } from 'react';
import '../styles/gallery.css'
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
    'https://www.bytecodelearners.club/statics/g8.jpg',
    'https://www.bytecodelearners.club/statics/g6.jpg',
    'https://www.bytecodelearners.club/statics/g5.jpg',
    'https://www.bytecodelearners.club/statics/prevEvent1.jpg',
    'https://www.bytecodelearners.club/statics/g4.jpg',
    'https://www.bytecodelearners.club/statics/g1.jpg',
    'https://www.bytecodelearners.club/statics/g2.jpg',
    'https://www.bytecodelearners.club/statics/g3.jpg'
    
];
    return ( 
        <div className="gallery" id="Gallery">
            <h1>Event Gallery</h1>
            <div className="images">
                {images.map((img,index)=>{return <img className='gallery-img' key={index} src={img} alt=""/>})}
            </div>
            <div class="light-box">.</div>
        </div>
     );
}
 
export default Gallery;