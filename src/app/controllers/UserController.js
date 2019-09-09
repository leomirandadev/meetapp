import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Validation fails',
      });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({
        message: 'E-mail already exists.',
      });
    }

    const { id, name, email } = await User.create(req.body);
    return res.json({
      message: 'User was created!',
      output: {
        id,
        name,
        email,
      },
    });
  }

}

export default new UserController();