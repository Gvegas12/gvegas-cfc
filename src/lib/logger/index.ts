import alert from "cli-alerts";

type LoggerType = {
  name: string;
  message: string;
  type?: "success" | "warning" | "info" | "error";
};
export default ({ name, message, type = "error" }: LoggerType) => {
  alert({
    type,
    name,
    msg: message,
  });
};
