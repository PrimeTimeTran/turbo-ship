import sgMail from '@sendgrid/mail'
import { jwtSign } from '../utils/security/token'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const mailers = {
  welcome: {
    dynamic_template_data: {},
    from: 'primetimetran@gmail.com',
    subject: 'Welcome to Turboship!',
    template_id: 'd-fbc4d8e63bbf47b1991b250f016c6c24',
  },
  // Confirm Email
  // Forgot password
  // Password reset
}

async function mailWelcome(opts) {
  try {
    let data = {
      confirm_url_with_token: process.env.HOST_URL + '/confirm-email?token=' + jwtSign({ email: opts.to }, '7 days'),
    }
    await sgMail.send({ ...mailers.welcome, dynamic_template_data: data, to: opts.to })
  } catch (error) {
    console.error(error)
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

export { mailWelcome }
