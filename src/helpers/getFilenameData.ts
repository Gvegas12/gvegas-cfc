export const getFilenameData = (pathToTemplate: string) => {
  const dotIndex = pathToTemplate.lastIndexOf(".");
  const fileExtension = pathToTemplate.slice(dotIndex + 1);

  const lastSlashIndex = pathToTemplate.lastIndexOf("\\");
  let filename = pathToTemplate.slice(lastSlashIndex + 1);
  filename = filename.substring(0, filename.lastIndexOf("."));

  return {
    filename,
    fileExtension,
  };
};
