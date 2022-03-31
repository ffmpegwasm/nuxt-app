/**
 *
 * @param {Request} _ - Request Object
 * @param {Response} res - Response object
 * @param {Function} next - Next function
 */
export default function (_: any, res: any, next: any) {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
}
