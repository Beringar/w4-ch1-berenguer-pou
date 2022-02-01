const getInitialLetter = (name) => {
  const splittedName = name.split(" ");
  if (splittedName.length === 1) return splittedName[0][0].toUpperCase();
  return ["The", "El", "La"].includes(splittedName[0])
    ? splittedName[1][0].toUpperCase()
    : splittedName[0][0].toUpperCase();
};

export default getInitialLetter;
