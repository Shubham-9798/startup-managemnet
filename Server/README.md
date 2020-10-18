    // FindOneANdUpdate
    evaluationSchema.findOneAndUpdate(
       {_id: {$eq:evaluationId} },  
        {"$push": { "comments": commentObj }}, 
        null, 
        function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            // console.log("Original Doc : ",docs); 
            apiResponse.successResponse(res, "Comment Added")
        } 
    });

    // find-populate
     startupIdeaSchema
    .find()
    .populate([{path: "categoryId", ...slt}, {path: "domainId", ...slt}, {path: "statusId", ...slt}])
    .exec()
    .then(data => apiResponse.successResponseWithData(res,data))
    .catch(err => apiResponse.ErrorResponse(res, err))