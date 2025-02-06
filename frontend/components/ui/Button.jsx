
export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth,
  className = '',
  ...props 
}) {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}