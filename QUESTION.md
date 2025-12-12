

# In books controller question
* after pagination in get all books model and controller , it displays data only when query is passed, so if i try to get all books data without any filtering , it provide null in getallbooks 
eg- {
    "message": "Books fetching success.",
    "data": [],
    "pagination": {
        "page": 1,
        "perPage": 5,
        "totalBooks": 0
    }
}
# SOLVED 
-- ANSWER --
 in bookmodel when fetching books data and counting whole books number instead of using 
 where: tempWhereInputs - directly 
 USE - ...(tempWhereInputs.OR?.length ? {where: tempwhereInputs} : null )
 - What is above line does is it check if tempWhereInputs.OR has somethings in it or not . so if not then it gets null and if yes it sends the whereInputs parameters .