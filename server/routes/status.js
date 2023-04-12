module.exports = function (req, res) {
  try {
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(500).json({ message: 'error', error });
  }
};
