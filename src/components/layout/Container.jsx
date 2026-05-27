export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-3 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
