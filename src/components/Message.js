import React from "react";
import { Alert } from "reactstrap";

const Message = ({ color, press, children }) => {
  return (
    <Alert onClick={press} color={color}>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: "danger",
};

export default Message;
