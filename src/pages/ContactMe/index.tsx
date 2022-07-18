import { At, EnvelopeSimple, NotePencil, PaperPlaneTilt, Phone, User } from 'phosphor-react';
import { SocialMediaGroup } from '../../components/SocialMediaGroup';
import { WindowTitlebarPoints } from '../../components/WindowTitlebarPoints';
import styles from './styles.module.scss';

export function ContactMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <WindowTitlebarPoints />
        <SocialMediaGroup />
        <form action="" >
          <div className={styles.title}>
            <EnvelopeSimple size={54} weight='light' />
            <h1>Contact me</h1>
          </div>
          <label htmlFor="userName">
            <User size={18}/>
            <input type="text" name='userName' placeholder='Name'/>
          </label>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <At size={18}/>
              <input type="email" name='email' placeholder='E-mail'/>
            </label>
            <label htmlFor="phone">
              <Phone size={18}/>
              <input type="text" name='phone' placeholder='Phone Number'/>
            </label>
          </div>
          <label htmlFor="message">
            <NotePencil size={18}/>
            <textarea name="message" id="message" rows={8} placeholder='Type your message here'></textarea>
          </label>
          <button type='submit'><PaperPlaneTilt size={24} weight='light'/> Send E-mail</button>
        </form>
      </div>
    </div>
  );
}