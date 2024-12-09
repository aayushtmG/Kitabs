
const page = () => {
  return (
    <div className="w-full">
      {/* Pink Header Section */}
      <div className="bg-primary text-center h-[300px] pt-24 ">
        <h1 className="text-4xl xl:text-5xl font-extrabold text-text-primary tracking-wider ">About us</h1>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center px-4 py-10 -translate-y-36">
        {/* Image Section */}
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/600x400" // Replace with your image URL
            alt="Team"
            className="rounded-lg shadow-lg w-full max-w-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-center max-w-3xl text-gray-700 space-y-6">
          <p>
            We’re a fully distributed team of 85 people living and working in 15
            countries around the world. And we’re working to build the best
            products to help our customers build their brands and grow their
            businesses on social media.
          </p>
          <p>
            We’ve always aimed to do things a little differently at Buffer.
            Since the early days, we’ve had a focus on building one of the most
            unique and fulfilling workplaces by rethinking a lot of traditional
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
