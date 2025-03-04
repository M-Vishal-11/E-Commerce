import Header from "@/app/Header";
import Photo from "./photo";
import Footer from "@/app/Footer";

const ProductPage = async ({ params }) => {
  const { title } = await params;

  return (
    <>
      <Header />
      <div className="flex flex-row gap-10">
        <Photo alt={title} />
        <div>
          <h1 className="text-4xl">The best radio award goes to</h1>
        </div>
        <div className="border-2 w-100"></div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
