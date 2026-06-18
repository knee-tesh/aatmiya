export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Name is required (min 2 characters)" });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Valid email is required" });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ error: "Message is required (min 10 characters)" });
    }

    console.log("Contact form submission:", { name, email, phone, subject, message });

    return res.status(200).json({ success: true, message: "Thank you! We'll be in touch soon." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
