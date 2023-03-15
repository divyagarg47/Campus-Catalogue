import Searchicon1 from '../assets/searchicon1.svg';
import Searchicon2 from '../assets/searchicon2.svg';
import Searchicon3 from '../assets/searchicon3.svg';

const SearchBar = (props) => {
    return (
        <div style={{backgroundColor: "#FFFFFF",borderRadius: "16px", height: props.height, width: props.width, margin:"auto", position:"relative"}}>
            
            <div style={{color:"6F6F6F", fontSize:"16px", paddingLeft:"20px", paddingTop:"4%"}}>
                Search for restaurant,food...
            </div>
            <img src={Searchicon1} alt="" className="card-img" style={{ position: 'absolute', top: "25%", right: "10%", height: "50%", width: "5%" }}  />
            <img src={Searchicon2} alt="" className="card-img" style={{ position: 'absolute', top: "25%", right: "5%", height: "50%", width: "5%" }}  />
            <img src={Searchicon3} alt="" className="card-img" style={{ position: 'absolute', top: "25%", right: 0, height: "50%", width: "5%" }}  />
    
        </div>
    );
}





{/* // const SearchBar = () => { */}

//     return (
//         <div className="searchbar">  
//             <form>
//                 <input
//                     className='searchInput'
//                     type='text'
//                     // onChange={handleChange}
//                     placeholder='Search here'

//                 />
                
//              </form> 
//         </div>
//     );
// }
export default SearchBar;