import facilitatorModel from "../models/facilitatorModel.js";

const facilitatorController ={
    createNewFacilitator : async(req,res)=>{
        try {
         const newFacilitator = await facilitatorModel.create(req.body)
         res.status(201).json({
            message:"Facilitator created successfully!!!",
           facilitator:newFacilitator
         })

        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
            
        }
    },
    getAllFacilitators : async (req,res)=>{
        try {
            const getFacilitators = await facilitatorModel.find()
            res.status(200).json({
            message:"Facilitators retrieved successfully!!!",
            facilitators:getFacilitators
         }) 
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                message:"Internal Server Error"
            })
        }

    },
    getFacilitatorById:async(req,res)=>{
        const retrievedFacilitator = await facilitatorModel.findById(req.params.id)
      try {
        
       
            res.status(200).json(retrievedFacilitator)
        }
       catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
      }
    },
    getFacilitatorByEmail:async(req,res)=>{
        try {
          const retrievedFacilitator = await facilitatorModel.findOne({email:req.params.email})
        
              res.status(200).json(retrievedFacilitator)
          }
        catch (error) {
          res.status(500).json({
              message:"Internal Server Error"
          })
        }
      },

    updateFacilitator: async(req,res)=>{
        const updatedFacilitator = await facilitatorModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
        try {
           
                res.status(200).json(updatedFacilitator)
            }
            
        catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    },
    deleteFacilitator: async(req,res)=>{
        const id =req.params.id;
            const deletedFacilitator = await facilitatorModel.findByIdAndDelete(id);
        try {
            
                res.status(200).json(deletedFacilitator)
            }
            
         catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            }) 
        }

    }

}
export default facilitatorController