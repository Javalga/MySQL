let sql1 = "SELECT pieces.name, pieces.status, loan_date, loan_return_date, containers.name, containers.position,owners.full_name, owners.mail FROM pieces JOIN containers ON(pieces.container_id = containers.container_id) JOIN owners ON(owners.owner_id = pieces.owner_id)WHERE pieces.status = not own on loan;"

let sql2 = "SELECT collection.display, COUNT(pieces.piece_id),pieces.status, loan_date, loan_return_date FROM pieces JOIN collection ON(collection.collection_id = pieces.collection_id) GROUP BY collection.display ORDER BY piece_id  DESC;"