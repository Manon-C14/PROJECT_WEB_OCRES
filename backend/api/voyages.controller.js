import VoyagesDAO from "../dao/voyagesDAO.js"
import bson from "bson"
const ObjectId=bson.ObjectId

export default class VoyagesController {
    static async apiGetVoyages(req, res, next) {
        const voyagesParPage = req.query.voyagesParPage ? parseInt(req.query.voyagesParPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.Pays) {
            filters.Pays = req.query.Pays
        }
        else if (req.query.dateArrivee) {
            filters.DateArrivee = req.query.DateArrivee
        }
        else if (req.query.DateRetour) {
            filters.DateRetour = req.query.DateRetour
        }
        else if (req.query.Raison) {
            filters.Raison = req.query.Raison
        }

        const { listeVoyages, totalNumvoyages } = await VoyagesDAO.getVoyages({
            filters,
            page,
            voyagesParPage,
        })

        let response = {
            voyages: listeVoyages,
            page: page,
            filters: filters,
            entries_per_page: voyagesParPage,
            total_results: totalNumvoyages,
        }
        res.json(response)
    }

    static async apiPostVoyage(req, res, next) {
        try {
            const pays = req.body.Pays
            const dateArrivee = new Date(req.body.DateArrivee)
            const dateRetour = new Date (req.body.DateRetour)
            const raison = req.body.Raison

            const VoyageResponse = await VoyagesDAO.addVoyage(
                pays,
                dateArrivee,
                dateRetour,
                raison,
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiUpdateVoyage(req, res, next) {
        try {
            const voyageId = req.body.voyage_id
            const pays = req.body.Pays
            const dateArrivee = new Date(req.body.DateArrivee)
            const dateRetour = new Date(req.body.DateRetour)
            const raison = req.body.Raison

            const voyageResponse = await VoyagesDAO.updateVoyage(
                voyageId,
                pays,
                dateArrivee,
                dateRetour,
                raison,
            )


            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiDeleteVoyage(req, res, next) {
        try {
            const voyageId = req.query.id
            console.log(voyageId)
            const voyageResponse = await VoyagesDAO.deleteVoyage(
                voyageId,
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }


    static async apiGetVoyageRaison(req, res, next) {
        try {
            let raison = await VoyagesDAO.getRaison()
            res.json(raison)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }


}