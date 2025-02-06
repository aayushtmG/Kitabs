export default function Avatar({ src, alt }) {
  return (
    <div className="relative w-24 h-24">
      {src ? (
        <img
          src={src}
          alt={alt || "Profile"}
          className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
        </div>
      )}
    </div>
  );
}