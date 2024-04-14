import stylex from "@stylexjs/stylex";

const buttonStyle = stylex.create({
  button: {
    backgroundColor: "red",
    color: "#000",
    ":hover": {
      backgroundColor: "blue",
    },
    width: {
      default: 300,
      "@media (max-width: 800px)": "100%",
    },
    containerType: "inline-size",
    containerName: "stylex-button",
  },
  inner: {
    color: {
      default: "#fff",
      "@container stylex-button (min-width: 400px)": "#000",
    },
  },
});

const ButtonWithStyleX = () => {
  return (
    <button className={stylex(buttonStyle.button)}>
      Hello StyleX <span {...stylex.props(buttonStyle.inner)}>inner</span>
    </button>
  );
};

export { ButtonWithStyleX };
