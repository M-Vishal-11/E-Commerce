import CardHeader from './assets/Cardh1.jsx';
import CardImg from './Cardimg.jsx';
import CardDescription from './assets/Carddesc.jsx';
function Card(){
    return(<div className  = "Box hover:scale-105 cursor-pointer">
        <CardHeader/>
        <CardImg/>
        <CardDescription/>
    </div>);
}
export default Card;