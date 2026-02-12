export default function SectionContainer({ children, className = "" }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
