import './styles.css'
import video1 from '../assets/video1.mp4'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

export const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return (
        <video autoPlay loop muted className='fade-in h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover z-[-1]'>
            <source src={video1} type='video/mp4' />
        </video>
    )
  }
  else if(heroCount === 0){
    return <img src={image1} alt="image1" className='fade-in h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover z-[-1]' />
  }
  else if(heroCount === 1){
    return <img src={image2} alt="image2" className='fade-in h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover z-[-1]' />
  }
  else if(heroCount === 2){
    return <img src={image3} alt="image3" className='fade-in h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover z-[-1]' />
  }
}
