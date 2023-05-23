export const getFilenameData = (pathToTemplate: string) => {
  const dotIndex = pathToTemplate.lastIndexOf(".");
  const fileExtension = pathToTemplate.slice(dotIndex + 1);
  const filename = "Template";

  return {
    filename,
    fileExtension,
  };
};
