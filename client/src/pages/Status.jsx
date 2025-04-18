import { useState } from "react";

export default function Status() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.redirect) {
        window.location.href = data.redirect; // Redirect to Vote.org
      } else {
        setError("Could not determine your registration status.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Check Your Voter Registration Status</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Checking..." : "Check Status"}
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}
