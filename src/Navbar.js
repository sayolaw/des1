import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginRight:"3px"}} />
  return (
    <header>
        <div className="row col-12 m-0 p-0  align-items-center justify-content-end" style={{height:"100px"}}>
            <div className="row col-6 m-0 p-0  justify-content-center align-items-center h-75">
                <ul className="row col-12 p-0 m-0 h-50" style={{listStyle:"none"}}>
                    <li className="col-3"><a href="#">Men</a></li>
                    <li className="col-3"><a href="#" >Women</a></li>
                    <li className="col-3"><a href="#">Customize</a></li>
                </ul>
            </div>
            <div className="row col-4 m-0 p-0  align-items-center h-75"  >
            <ul className="row col-12 p-0 m-0 h-50" style={{listStyle:"none"}}>
            <li className="col"><a href="#">{element} Search</a></li>
            <li className="col"><a href="#">My Account</a></li>
                 </ul> 
            </div>
            </div>

       
    </header>
  )
}
