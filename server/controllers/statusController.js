const checkVoterStatus = async (req, res) => {
    const { name, dob, address } = req.body;
  
    if (!name || !dob || !address) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    // ✅ Simulate logging the request
    console.log("🔍 Voter status check:", { name, dob, address });
  
    // 🚀 Redirect user to vote.org's check tool
    return res.status(200).json({
      redirect: "https://www.vote.org/am-i-registered-to-vote/",
      message: "Redirecting to Vote.org's registration status check tool.",
    });
  };
  
  module.exports = { checkVoterStatus };
  