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
        'https://www.bytecodelearners.tech/statics/event2022_pic1.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic2.jpeg',
        'https://www.bytecodelearners.tech/statics/g6.jpg',
        'https://www.bytecodelearners.tech/statics/event2022_pic4.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic3.jpeg',
        'https://www.bytecodelearners.tech/statics/g5.jpg',
        'https://www.bytecodelearners.tech/statics/g3.jpg',
        'https://www.bytecodelearners.tech/statics/event2022_pic6.jpeg',
        'https://www.bytecodelearners.tech/statics/event2022_pic5.jpeg',
        'https://www.bytecodelearners.tech/statics/g1.jpg',
        
];
    return ( 
        <div className="gallery" id="Gallery">
            <h1>Event Gallery</h1>
            <div className="images">
                {images.map((img,index)=>{return <img className='gallery-img' key={index} src={img} alt=""/>})}
            </div>
            <div className="light-box">.</div>
        </div>
     );
}
 
export default Gallery;