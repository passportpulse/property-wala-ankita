export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    small: "py-12 lg:py-16",
    default: "py-20 lg:py-24",
    large: "py-28 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`${sizes[size]} ${className}`}
    >
      {children}
    </section>
  );
}
