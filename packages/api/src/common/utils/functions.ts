/**
 * normalizeString
 * @description - replace special characters from a string
 * @use - normalizeString('Fábula Niño');
 * @function
 * @param {string} str - string to parse
 * @return {string} string parsed (e.g. Fabula Nino)
 */
export const normalizeString = (str: string) => {
  // VARIABLES
  let from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
  let to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
  let mapping: Record<string, string> = {};
  for (let i = 0; i < from.length; i++) {
    mapping[from.charAt(i)] = to.charAt(i);
  }
  let ret = [];
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (mapping.hasOwnProperty(str.charAt(i))) {
      ret.push(mapping[c]);
    } else {
      ret.push(c);
    }
  }
  return ret.join('');
};
