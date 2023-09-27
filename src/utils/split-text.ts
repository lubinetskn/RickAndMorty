export function splitText(text: string, chunkSize: number) {
  if (text.length <= chunkSize) {
    return text;
  }

  const chunks = [];
  let chunkStartIndex = 0;
  let lastSpace = 0;

  for (let i = 0; i < text.length; i++) {
    if (i - chunkStartIndex >= chunkSize) {
      chunks.push(text.slice(chunkStartIndex, lastSpace + 1));
      chunkStartIndex = lastSpace + 1;
    }

    if (text[i] === " ") {
      lastSpace = i;
    }
  }

  if (chunkStartIndex < text.length - 1) {
    chunks.push(text.slice(chunkStartIndex));
  }

  return chunks;
}
