export const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
  <label className="text-sm font-semibold" htmlFor={htmlFor}>
    {children}
  </label>
);
