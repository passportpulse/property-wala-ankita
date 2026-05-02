export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    default: "py-10 md:py-16 lg:py-20",
    small: "py-6 md:py-10",
    large: "py-16 md:py-24 lg:py-32",
  };

  return (
    <section id={id} className={`${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
