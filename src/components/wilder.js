import DeleteWilder from "./deleteWilder";
import Skill from "./skills";
import blank_profile from "../assets/blank_profile.png";
import styles from './Wilder.module.css';

export default function wilder({name, city, skills, wilderId, loadWilder}) {
  

  

  return (
    <article className={styles.card}>
      <img src={blank_profile} alt='Jane Doe Profile' />
      <h3>{name[0].toUpperCase() + name.split('').splice(1).join('')}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.name} votes={skill.votes} />
        ))}
      </ul>
      <DeleteWilder wilderID={wilderId} loadWilder={loadWilder}/>
    </article>
  );
}
