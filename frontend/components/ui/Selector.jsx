
export default function Selector({ label, error,options,...props }) {
  return (
    <div className="space-y-2 flex-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select 
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        >
          {
            options.map(opt => (
              <option value={opt} key={opt}>{opt}</option> 
            ))
          }
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}