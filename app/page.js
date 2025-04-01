import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  return (
    <div className="bg-linear-to-r from-cyan-500 to-blue-500">
      <Header />
      <div className="grid grid-cols-4 bg-[#dcebff] max-w-[1100px] justify-center items-center m-auto p-5 pt-10 pb-10 rounded-md">
        {data.map((item, index) => (
          <Card
            key={item.id || index}
            title={item.title}
            description={item.description}
            img_url={item.img_url}
            price={item.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
