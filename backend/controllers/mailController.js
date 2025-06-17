const mailer = require('../utils/mailer');

exports.sendMail = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await mailer({ name, email, message });
    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
}; 