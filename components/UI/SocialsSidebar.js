import styles from './SocialsSidebar.module.scss';

function SocialsSidebar() {
  return (
    <div className={styles['socials-sidebar']}>
      {/* Socials */}
      <div className={styles['socials-sidebar__socials']}>
        {/* Social 1 */}
        <a href='https://github.com/bryan-granda' className={styles['socials-sidebar__socials--social']} target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        {/* Social 2 */}
        <a href='https://www.linkedin.com/in/bryan-granda-8585b5255/' className={styles['socials-sidebar__socials--social']} target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
    </div>
  );
}

export default SocialsSidebar;
