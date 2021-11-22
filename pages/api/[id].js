

export default async function handler(req, res) {

  console.log(req.query["id"]) // [id] url of the page 

  if (true) {
    res.end("no such ID exist")  // to send normal text
    // res.json({ message: 'no such ID exist' }) // to send json data
  }

}