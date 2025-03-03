import Card from './Card.jsx';
import Headertop from './Header.jsx';

function App(){
  return(
    <>
    <Headertop/>
    <div className="Row">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className="Row">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className="Row">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    </>
    
  );
}
export default App;