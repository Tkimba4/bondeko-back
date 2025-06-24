import { insert } from "../models/reservationsModel.js";
/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 * @param {Request} req
 * @param {Response} res
 */
export async function addReservation(req, res) {
  insert(req.body, (err, msg) => {
    if (err) {
      res.status(500).send("Unable to add reservation");
    }
    console.log("in...");
    res.status(201).send();
  });
}
/**
 * @param {Request} req
 * @param {Response} res
 */
export async function updateReservation(req, res) {
  try {
    const { id, state } = req.body;
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}
/**
 * @param {Request} req
 * @param {Response} res
 */
export async function deleteReservation(req, res) {
  try {
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}
/**
 * @param {Request} req
 * @param {Response} res
 */
export async function getAllReservations(req, res) {
  try {
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}
/**
 * @param {Request} req
 * @param {Response} res
 */
export async function getReservation(req, res) {
  try {
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
}
