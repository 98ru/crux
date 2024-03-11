const sourceFilePath = import.meta.resolveSync("@csstools/normalize.css");
const file = await Bun.file(sourceFilePath); // const targetFilePath =
// console.log("All Meta = ", import.meta);
console.log("Resolve = ", sourceFilePath);
const resp = await Bun.write("./public/normalize.css", file);
console.log("Message = ", resp);
