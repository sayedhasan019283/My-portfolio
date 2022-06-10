import React from 'react';
import emailjs from 'emailjs-com'
// import contact data
import { contact } from '../data';


const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(

      "service_umvsdkn",
      "template_djs6xcx",
      e.target,
      'vDhH6ddjcp5GjrFA4'
    ).then(res => {
      console.log(res);
    }).catch(err => (console.log(err)));
  }
  return (
    <section className='section bg-primary mt-0' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block text-accent mt-28'>
            Contact me
          </h2>
          <p className='subtitle text-white mb-10'>
            Don't hesitate to contact me if you think I can provide you something!
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1 text-white'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
            onSubmit={sendEmail}
          >
            <div className=' gap-8'>
              <input className='input mt-2 h-8 w-96' type='text' name='name' placeholder='Your name' />
              <br />
              <input className='input mt-2 h-8 w-96' type='email' name='user_email' placeholder='Your email' />
              <br />
              <textarea
                className='textarea mt-2 h-24 w-96' name='message'
                placeholder='Your message'
              ></textarea>
            </div>
            <input className='btn btn-lg bg-accent hover:bg-secondary-hover ml-32 mt-0  text-white text-2xl px-10 py-3 rounded-md' type="submit" value='send' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
