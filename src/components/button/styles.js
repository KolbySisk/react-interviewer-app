import styled from "@emotion/styled";

export const Button = styled.button({
  background: "#2D9CDB",
  color: "white",
  border: "none",
  fontSize: 14,
  borderRadius: 3,
  padding: "12px 50px",
  cursor: "pointer",
  outline: "none",
  width: "100%",
  ":active": {
    background:
      "radial-gradient(circle, rgba(63,94,251,1) 20%, rgba(252,70,107,1) 120%)",
  },
});
