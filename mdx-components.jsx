export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1
        style={{ color: "#cd2c3d", fontSize: "48px", fontFamily: "basteleur" }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "48px", fontWeight: "400" }}>{children}</h2>
    ),
    ...components,
  };
}
