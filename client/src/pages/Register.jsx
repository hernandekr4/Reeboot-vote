import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    address: "",
    dob: "",
  });

  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    setRedirect("");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.type === "online") {
        setRedirect(data.redirect);
        setMessage("You’ll be redirected to your state's voter registration site.");
        setTimeout(() => {
          window.location.href = data.redirect;
        }, 2000);
      } else if (data.type === "paper") {
        setMessage(data.message);
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register to Vote</h1>
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
        type="text"
  name="state"
  placeholder="State (e.g., TX)"
  value={formData.state}
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
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Submitting..." : "Register"}
        </button>
        {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}
