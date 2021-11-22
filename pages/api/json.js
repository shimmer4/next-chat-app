

export default async function handler(req, res) {
  console.log(req.method)
  res.json({ message: 'Hello Everyone!' })
}