export default function getDataChunks(data, itemsInChunk) {
  return data.reduce((acc, item, index) => {
    const chunksIndex = Math.floor(index / itemsInChunk);
    if (!acc[chunksIndex]) {
      acc[chunksIndex] = [];
    }
    acc[chunksIndex].push(item);
    return acc;
  }, []);
}
