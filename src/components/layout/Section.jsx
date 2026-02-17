export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    small: "py-4 lg:py-12",
    default: "py-6 lg:py-20",
    large: "py-8 lg:py-28",
  };

  return (
    <section id={id} className={`${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
