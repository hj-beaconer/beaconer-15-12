import React from 'react'
import style from "./form.module.css"
import { Arrowacodian } from '../../Utils/svg';
import { useRouter } from 'next/router';

const DescriptionSolution = ({ text,solution, className }) => {

  const router = useRouter();

  const cybersecurityauditHandle = () =>{
    router.push('/cybersecurityaudit');
  }
  return (
    <div>
      <div className={`${style.Description_second} ${className}`} dangerouslySetInnerHTML={{ __html: text }}/>
      {/* <div className={style.second_heading}>Solution</div>
      <p className={style.Description_second_s}>{solution}</p> */}
      <button className={style.second_acodian_button} onClick={cybersecurityauditHandle}>Learn More {Arrowacodian.icon()}</button>
    </div>
  )
}

export default DescriptionSolution;
  