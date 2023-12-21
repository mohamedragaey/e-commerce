export const DisplayFormikState = (props: any) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 75.67,
        zIndex: 100,
        height: 200,
        overflow: "auto",
      }}
    >
      <pre
        style={{
          background: "#f6f8fa",
          padding: ".5rem",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          margin: 0,
        }}
      >
        <strong>props</strong> = {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
};
