import app from "./app.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import router from "./api/voyages.route.js"
import VoyagesDAO from "./dao/voyagesDAO.js"
//import ReviewsDAO from "./dao/reviewsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.RESTVOYAGES_DB_URI,
  {
    maxpoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  }
)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await VoyagesDAO.injectDB(client)
    //await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })

export default router;
