export async function getService(req, res) {
  try {
    res.send();
  } catch (error) {
    res.status(500).send();
  }
}

export async function getAllServices(req, res) {
  try {
    const data = ["Gynecologie", "Chirurgie", "Pédiatrie", "Général"];


    res.json(data);
  } catch (error) {
    res.status(500).send();
  }
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
