import './myWork.css'
import { workData } from '../../assets/myData'
import {FaArrowRight} from 'react-icons/fa'

export default function MyWork() {
  return (
    <div className='work-box'>
    <h2 className='title'>My Work</h2>
    <div className='work-container'>
      {
         workData.length > 0 ? workData.map((workItem) =>{
          return(
            <div className='work-content' key={workItem.id}>
                 <div className='work-image'>
                  <img src={workItem.image} alt=''/>
                 </div>
                 <div className='work-text'>
                    <h4>{workItem.title}</h4>
                 </div>
            </div>
          )
         }) : <p>Data Not Found</p>
      }
    </div>
    <div className='arrow'>
    <h5>View More</h5>
      <FaArrowRight/>
    </div>
      
    </div>
  )
}
