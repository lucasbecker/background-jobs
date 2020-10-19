import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }){
    const { user } = data;


    await Mail.sendMail({
      from: 'Backgrond-Jobs <email@email.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${user.name}, isto é uma tarefa em segundo plano e está é a sua senha: ${user.password}.`
    })
  }
}
