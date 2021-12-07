import express from "express"
import VoyagesCtrl from "./voyages.controller.js"


var router = express.Router();

router.route("/").get(VoyagesCtrl.apiGetVoyages)

//router.route("/id/:id").get(VoyagesCtrl.apiGetRestaurantById)
router.route("/raison").get(VoyagesCtrl.apiGetVoyageRaison)

router
  .route("/newVoy")
  .post(VoyagesCtrl.apiPostVoyage)
  .put(VoyagesCtrl.apiUpdateVoyage)
  .delete(VoyagesCtrl.apiDeleteVoyage)


export default router