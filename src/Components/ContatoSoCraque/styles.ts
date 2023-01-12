const useStyles = () => ({
  inputTelefone: {
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&input[type='number']::-webkit-outer-spin-button": {
      MozAppearance: "textfield",
    },
  },
});

export default useStyles;
