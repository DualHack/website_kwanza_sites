export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Kwanza Sites"
      className={className}
    />
  );
}
