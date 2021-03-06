import Joi from 'joi';
import { JoiAuthBearer } from '../validator';

export default {
  headers: Joi.object().keys({
    authorization: JoiAuthBearer().required(),
    'content-type': Joi.string().required().equal('application/json')
  }).unknown(true)
};
