

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */



/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function addReservation(req, res){
    try {
        console.log(req.body);
        // console.log();
        
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send()
        
    }
}
/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function updateReservation(req, res){
    try {
        
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send()
        
    }
}
/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function deleteReservation(req, res){
    try {
        
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send()
        
    }
}
/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function getAllReservations(req, res){
    try {
        
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send()
        
    }
}
/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function getReservation(req, res){
    try {
        
        res.status(201).send()
    } catch (error) {
        console.log(error);
        res.status(500).send()
        
    }
}