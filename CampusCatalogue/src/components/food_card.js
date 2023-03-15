import image from '../assets/pizza.png';

export default function FoodCard(props) {
    return (
        <div style={{backgroundColor: "#FFFFFF",borderRadius: "16px", height: props.height, width: props.width, position: "relative", display: "flex", flexDirection: "column" }}>
           
            <div style={{color:"020314", paddingLeft:"16px", paddingTop:"16px", fontSize: "18"}}>
                {props.heading1}
            </div>

            <div style={{color:"6F6F6F", paddingLeft:"16px", paddingTop:"10px", fontSize: "12px"}}>
                {props.heading2}
            </div>

            <img src={image} alt="" className="card-img" style={{ position: 'absolute', borderRadius: "16px", bottom: "2px", right: "2px", height: "50%", width: "50%" }}  />
        </div>
    );
};


