export default function Section({
  children,
  className = "",
  id,
  size = "default", // small | default | large
}) {
  const sizes = {
    small: "py-8 lg:py-14",
    default: "py-14 lg:py-20",
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
