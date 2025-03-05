import Image from "next/image";

const Photo = ({ alt }) => {
  return (
    <Image
      src="/download.jpeg"
      height={200}
      width={500}
      alt={alt}
      className="rounded-sm"
    />
  );
};

export default Photo;
