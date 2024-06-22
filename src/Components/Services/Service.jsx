import './service.css'
import { service } from '../../assets/myData'

const Service = () => {
  return (
    <div className='service-box'>
    <h2 className='title'>My Services</h2>
        <div className='service-content'>
            {
                service.length > 0 ? service.map((list) => <div className='service-inner' key={list.id}>
                       <img src={list.image} alt='image'/>
                       <div className='service-text'>
                         <h5>{list.title}</h5>
                         <p>{list.text}</p>
                       </div>
                </div>) :<p>Data Not Found</p>
            }
        </div>
    </div>
  )
}

export default Service
