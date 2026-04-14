export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    default: "my-2 lg:my-4 py-2 lg:py-4",
  };

  return (
    <section id={id} className={`${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
