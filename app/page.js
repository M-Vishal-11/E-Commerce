import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css";

export default function Home() {
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div>
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
      </div>
      <Footer />
    </div>
  );
}
