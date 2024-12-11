import Map from "@/components/Map"
import ContactForm from "@/components/ContactForm"
import MainLayout from "layouts/MainLayout";
const page = () => {
  return (
        <MainLayout>
    <div className="w-full">
      {/* Pink Header Section */}
      <div className="bg-primary text-center h-[300px] pt-24 ">
        <h1 className="text-4xl xl:text-5xl font-extrabold text-text-primary tracking-wider ">Contact</h1>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center px-4 py-10 -translate-y-36">
        {/* Image Section */}
        <div className="mb-8 max-md:w-full xl:w-4/5">
        {/* Map Section */}
        <Map></Map>
        </div>
        {/* Contact Section */}
        <ContactForm/>
      </div>
    </div>
    </MainLayout>
  );
};

export default page;
