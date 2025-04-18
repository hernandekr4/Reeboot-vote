const submitPledge = (req, res) => {
    const { name, email, age } = req.body;
  
    if (!name || !email || !age) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    // For now, just log it
    console.log("Pledge received:", { name, email, age });
  
    return res.status(200).json({ message: "Pledge submitted successfully!" });
  };
  
  module.exports = { submitPledge };
  