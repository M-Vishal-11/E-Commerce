import Image from "next/image";

const Photo = ({ alt }) => {
  return <Image src="/download.jpeg" height={200} width={600} alt={alt} />;
};

export default Photo;
