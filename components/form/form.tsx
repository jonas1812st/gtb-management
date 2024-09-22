export const FormLabel = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
  <label htmlFor={htmlFor} className="text-gray-600 font-medium text-sm">
    {children}
  </label>
);

export const ErrorMessage = ({ children }: { children: React.ReactNode | undefined }) => (
  <span className="text-xs font-medium text-red-500">{children}</span>
);
