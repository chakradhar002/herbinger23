db.myharbinger.insertMany([{
title:"title2",body:"body2",category:"Tech",likes:2,tags:["news","events"],date:Date()},
{
title:"title2",body:"body2",category:"Tech",likes:2,tags:["news","events"],date:Date()}])

//update
db.myharbinger.updateOne({title :"body2"},{$set:{likes:22}})
//group aggregation
db.myharbinger.aggregate(
    [{$group:{_id:'$category'}}]
)
//