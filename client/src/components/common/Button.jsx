export default function Button({ className, onClick, children }) {
  return (
    <button className={`${className} bg-black hover:scale-[1.02] px-8 py-2 text-white hover:bg-gray-800 rounded-md shadow-md duration-200`} onClick={onClick}>
      {children}
    </button>
  );
}
