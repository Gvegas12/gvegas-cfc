type LoggerType = {
    name: string;
    message: string;
    type?: "success" | "warning" | "info" | "error";
};
declare const _default: ({ name, message, type }: LoggerType) => void;
export default _default;
