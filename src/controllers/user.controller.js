const User = require('../models/user');
const passport = require('passport');
const { sendMailToUser } = require('../config/nodemailer');

const renderRegisterForm = (req, res) => {
  res.render('user/registerForm');
};

const registerNewUser = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  if (Object.values(req.body).includes('')) return res.send('Lo sentimos, debes llenar todos los campos');

  if (password !== confirmpassword) return res.send('Lo sentimos, las contraseñas no coinciden');

  const userBDD = await User.findOne({ email });
  if (userBDD) return res.send('Lo sentimos, el email ya se encuentra registrado');

  const newUser = new User({ name, email, password, confirmpassword });
  newUser.password = await newUser.encrypPassword(password);

  // Establecer el token
  const token = newUser.crearToken();

  try {
    // Enviar el correo electrónico con el token
    await sendMailToUser(email, token);
    console.log('Correo de confirmación enviado a: ',email);
  } catch (error) {
    console.error('Error al enviar el correo de confirmación:', error);
    return res.send('Error al enviar el correo de confirmación');
  }

  await newUser.save();
  res.redirect('/user/login');
};

const confirmEmail = async (req, res) => {
  if (!req.params.token) return res.send('Lo sentimos, no se puede validar la cuenta');

  try {
    const userBDD = await User.findOne({ token: req.params.token });

    if (!userBDD) {
      return res.send('Lo sentimos, no se encontró un usuario con este token');
    }

    userBDD.token = null;
    userBDD.confirmEmail = true;
    await userBDD.save();

    res.send('Token confirmado, ya puedes iniciar sesión');
  } catch (error) {
    console.error('Error al confirmar el correo electrónico:', error);
    res.send('Error al confirmar el correo electrónico');
  }
};

const renderLoginForm = (req, res) => {
  res.render('user/loginForm');
};

const loginUser = passport.authenticate('local', {
  failureRedirect: '/user/login',
  successRedirect: '/portafolios',
});

const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) return res.send('Ocurrió un error al cerrar sesión');
    res.redirect('/');
  });
};

module.exports = {
  renderRegisterForm,
  registerNewUser,
  renderLoginForm,
  loginUser,
  logoutUser,
  confirmEmail,
};
