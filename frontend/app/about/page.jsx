import MainLayout from "layouts/MainLayout";

const page = () => {
  return (
        <MainLayout>
    <div className="w-full">
      {/* Pink Header Section */}
      <div className="shadow-md text-center h-[300px] pt-24 ">
        <h1 className="text-4xl xl:text-5xl font-extrabold text-text-primary tracking-wider ">About Us</h1>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center px-4 py-10 -translate-y-36">
        {/* Image Section */}
        <div className="mb-8">
          <img
            src="/images/team_banner.jpg" // Replace with your image URL
            alt="Team"
            className="rounded-lg shadow-lg w-full max-w-3xl"
          />
        </div>
{/* Text Section */}
<div className="text-center max-w-3xl text-gray-700 space-y-6">
  <p>
    At Kitabs, we’re passionate about connecting readers with stories that inspire, educate, and entertain. With a carefully curated selection of books from around the world, we aim to create a space where book lovers can discover their next favorite read.
  </p>
  <p>
    We believe in the power of books to transform lives and bring people together. That’s why we’re committed to offering a diverse range of genres, from timeless classics to contemporary bestsellers, ensuring there’s something for everyone.
  </p>
  <p>
    Our team is dedicated to providing an exceptional experience for every customer, whether you’re browsing in-store or online. Join us on this journey as we celebrate the joy of reading and the magic of books.
  </p>
</div>
      </div>
    </div>
    </MainLayout>
  );
};

export default page;
