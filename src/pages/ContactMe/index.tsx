import { At, EnvelopeSimple, NotePencil, PaperPlaneTilt, Phone, User } from 'phosphor-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { INTLDiallingCodesSelect } from '../../components/INTLDiallingCodesSelect';
import { SocialMediaGroup } from '../../components/SocialMediaGroup';
import { WindowTitlebarPoints } from '../../components/WindowTitlebarPoints';
import styles from './styles.module.scss';

interface FormProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactMe() {
  const { register, handleSubmit } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = data => console.log(data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <SocialMediaGroup />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <EnvelopeSimple size={54} weight='light' />
            <h1>Contact me</h1>
          </div>
          <label htmlFor="name">
            <User size={18}/>
            <input type="text" id='name' placeholder='Name' {...register('name')}/>
          </label>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <At size={18}/>
              <input type="email" id='email' placeholder='E-mail' {...register('email')}/>
            </label>
            <div className={styles['phoneInputGroup']}>
              <INTLDiallingCodesSelect />
              <label htmlFor="phone" style={{ minWidth: '168px' }}>
                <Phone size={18}/>
                <input type="text" id='phone' placeholder='Phone Number' {...register('phone')}/>
              </label>
            </div>
          </div>
          <label htmlFor="message">
            <NotePencil size={18}/>
            <textarea id="message" rows={8} placeholder='Type your message here' {...register('message')}></textarea>
          </label>
          <button type='submit'><PaperPlaneTilt size={24} weight='light'/> Send E-mail</button>
        </form>
      </div>
    </div>
  );
}