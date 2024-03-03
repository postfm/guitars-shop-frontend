const UPLOAD_DIRECTORY =
  '\\web-projects\\guitars-shop\\guitars-shop-backend\\src\\file-store\\store';

export function getImageUrl(url: string): string {
  const imageUrl = `http://localhost:4000/store${url.replace(
    UPLOAD_DIRECTORY,
    ''
  )}`;

  return imageUrl;
}
