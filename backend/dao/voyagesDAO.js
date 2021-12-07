import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let voyages

export default class VoyagesDAO {
    static async injectDB(conn) {
        if (voyages) {
            return
        }
        try {
            voyages = await conn.db(process.env.RESTVOYAGES_NS).collection("Pays")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in voyagesDAO: ${e}`,
            )
        }
    }

    static async getVoyages({
        filters = null,
        page = 0,
        voyagesParPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("Pays" in filters) {
                query = { "Pays": { $eq: filters["Pays"] } }
            } else if ("DateArrivee" in filters) {
                query = { "DateArrivee": { $eq: filters["DateArrivee"] } }
            } else if ("DateDepart" in filters) {
                query = { "DateDepart": { $eq: filters["DateDepart"] } }
            } else if ("Raison" in filters) {
                query = { "Raison": { $eq: filters["Raison"] } }
            }
        }


        let cursor

        try {
            cursor = await voyages
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { listeVoyages: [], totalNumVoyages: 0 }
        }

        const displayCursor = cursor.limit(voyagesParPage).skip(voyagesParPage * page)

        try {
            const listeVoyages = await displayCursor.toArray()
            const totalNumVoyages = await voyages.countDocuments(query)

            return { listeVoyages, totalNumVoyages }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { listeVoyages: [], totalNumVoyages: 0 }
        }
    }

    static async addVoyage( pays, dateArrivee, dateRetour, raison) {
        try {
            const voyageDoc = {
                Pays: pays,
                DateArrivee: dateArrivee,
                DateRetour: dateRetour,
                Raison: raison,
                
            }

            return await voyages.insertOne(voyageDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e }
        }
    }

    static async updateVoyage(voyageId, pays, dateArrivee, dateRetour, raison) {
        try {
            const updateResponse = await voyages.updateOne(
                { _id: ObjectId(voyageId) },
                { $set: { Pays: pays, DateArrivee: dateArrivee, DateRetour: dateRetour, Raison: raison } },
            )

            return updateResponse
        } catch (e) {
            console.error(`Unable to update review: ${e}`)
            return { error: e }
        }
    }

    static async deleteVoyage(voyageId) {

        try {
            const deleteResponse = await voyages.deleteOne({
                _id: ObjectId(voyageId),
            })

            return deleteResponse
        } catch (e) {
            console.error(`Unable to delete review: ${e}`)
            return { error: e }
        }
    }


    static async getRaison() {
        let raisons = []
        try {
          raisons = await voyages.distinct("Raison")
          return raisons
        } catch (e) {
          console.error(`Unable to get cuisines, ${e}`)
          return raisons
        }
      }
}
