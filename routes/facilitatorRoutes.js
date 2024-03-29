import express from "express"
import facilitatorController from "../controllers/facilitatorController.js"
const routes= express.Router();


routes.post("/facilitator/create",facilitatorController.createNewFacilitator);
routes.get("/facilitator/list",facilitatorController.getAllFacilitators)
routes.get("/facilitator/:id",facilitatorController.getFacilitatorById)
routes.get("/facilitator/email/:email",facilitatorController.getFacilitatorByEmail)
routes.put("/facilitator/updateFacilitator/:id",facilitatorController.updateFacilitator);
routes.delete("/facilitator/:id",facilitatorController.deleteFacilitator)

export default routes;