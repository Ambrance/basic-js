module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const strArray = members.filter((i) => typeof i === 'string');
  const firstLetters = strArray.map((i) => i.trim()[0].toUpperCase());
  return firstLetters.sort().join('');
};