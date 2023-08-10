const imgFolder = {
  'qr':'QRs'
}
const imageUrl = (folder,img) => {
  // let url = url(`/images/img/${folder}/${img}`);
  // let url = new URL(`../../public/images/img/${folder}/${img}`, import.meta.url);
  return img;
}


export {
  imageUrl,
  imgFolder
}