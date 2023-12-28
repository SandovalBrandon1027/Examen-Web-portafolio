const { Router } = require('express');
const {
  renderRegisterForm,
  registerNewUser,
  renderLoginForm,
  loginUser,
  logoutUser,
  confirmEmail, // Asegúrate de importar confirmEmail desde el controlador
} = require('../controllers/user.controller');
const router = Router();
const { redirectIfAuthenticated } = require('../helpers/validate-auth');

router.get('/user/register', renderRegisterForm);
router.post('/user/register', registerNewUser);

router.get('/user/login', redirectIfAuthenticated, renderLoginForm);
router.post('/user/login', loginUser);

router.post('/user/logout', logoutUser);

// Ruta para confirmar la cuenta del usuario
router.get('/user/confirmar/:token', confirmEmail); // Asegúrate de que confirmEmail esté importada correctamente

module.exports = router;