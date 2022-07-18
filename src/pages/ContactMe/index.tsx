import { Envelope } from 'phosphor-react';
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
            <Envelope size={54}/>
            <h1>Contact me</h1>
          </div>
          <label htmlFor="userName">
            <input type="text" name='userName'/>
          </label>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              <input type="email" name='email'/>
            </label>
            <label htmlFor="phone">
              <input type="text" name='phone'/>
            </label>
          </div>
          <label htmlFor="message">
            <textarea name="message" id="message"></textarea>
          </label>
          <button type='submit'>Send E-mail</button>
        </form>
      </div>
    </div>
  );
}