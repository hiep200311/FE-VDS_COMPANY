const Carousel = ({ images }: { images: string }) => {
  console.log(images);
  return (
    <div className="flex items-center gap-2 justify-center h-max px-3 relative overflow-hidden">
      {/*actual image:*/}
      <img
        src={images}
        className="relative md:min-w-[300px] w-full rounded-xl overflow-hidden"
        alt="..."
      />
    </div>
  );
};

export default Carousel;
