export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    default: "my-4 lg:my-8 py-4 lg:py-8",
  };

  return (
    <section id={id} className={`${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
