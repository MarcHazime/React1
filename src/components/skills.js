import styles from './Skill.module.css';

export default function skill({ title, votes }) {
  return (
    <li className={styles.skill}>
    {title}
    <span className={styles.votes}>{votes}</span>
  </li>
  );
}
