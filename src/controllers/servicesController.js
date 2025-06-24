import { selectAll } from "../models/servicesModel.js";

export async function getService(req, res) {
  try {
    res.send();
  } catch (error) {
    res.status(500).send();
  }
}

export async function getAllServices(req, res) {
  selectAll((err, rows) => {
    if (err) {
      return res.status(500).send("Unable to fetch services");
    }
    return res.json(rows);
  });
}
export async function addService(req, res) {
  try {
    res.send();
  } catch (error) {
    res.status(500).send();
  }
}
export async function updateService(req, res) {
  try {
    res.send();
  } catch (error) {
    res.status(500).send();
  }
}
export async function deleteService(req, res) {
  try {
    res.send();
  } catch (error) {
    res.status(500).send();
  }
}
