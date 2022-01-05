const paginate = (sticker) => {
  // console.log(stickers);
  const itemsPerPage = 8;
  const pages = Math.ceil(sticker.length / itemsPerPage);
  // console.log(pages);
  const newStickers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    // console.log(start);
    return sticker.slice(start, start + itemsPerPage);
  });
  // console.log(newStickers);
  return newStickers;
};

export default paginate;
