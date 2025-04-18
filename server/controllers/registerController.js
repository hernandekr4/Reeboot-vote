const handleRegistration = async (req, res) => {
    const { name, state, address, dob } = req.body;
  
    if (!name || !state || !address || !dob) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    console.log('📩 Registration started for:', name, 'in', state);
  
    // Sample logic — add more states later
    const stateRedirects = {
        TX: 'https://www.votetexas.gov/register-to-vote/',
        CA: 'https://registertovote.ca.gov/',
        NY: 'https://www.ny.gov/services/register-vote',
        FL: 'https://registertovoteflorida.gov/home',
        IL: 'https://ova.elections.il.gov/',
        WA: 'https://voter.votewa.gov/',
      };
      
    const redirectURL = stateRedirects[state.toUpperCase()];
  
    if (redirectURL) {
      return res.status(200).json({
        type: 'online',
        redirect: redirectURL,
      });
    } else {
      return res.status(200).json({
        type: 'paper',
        message: 'Paper registration required. PDF generation coming soon.',
      });
    }
  };
  
  module.exports = { handleRegistration };
  