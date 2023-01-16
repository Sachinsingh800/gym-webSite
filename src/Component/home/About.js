import React from 'react'
import style from './About.module.css'
import Image from './Profile.png'
import Home from './Home'

function About() {
  return (
    <>
    <Home/>
    <div className={style.main} >
        <div style={{display:'flex'}}>
        <div  className={style.Column}>
        <h1 className={style.h1}>About Us</h1>
      <div >
      <img className={style.ProfileImage} src={Image}  width='200' height='200'></img>
   <br/>
   <br/>
   <h4 className={style.h1}>Age: 25</h4>
   <h4 className={style.h1}>Location: INDIA</h4>
      </div>
        </div>
        
        <div  className={style.Column1}>
          <div>
            <h6 className={style.Para} >I am Preetam yadav from varanasi Uttar Pradesh,

I have completed my graduation in B.SC from Allahabad university,

And I am pursuing MBA from Aktu University Lucknow,

My father is a contractor, my mother is a housewife. And I belong to the nuclear family,

</h6>
          </div>
          <div  className={style.AllBlock}>
          <div  className={style.block}>About your self ?</div>
          <div  className={style.block}> What is your hobbies? </div>
          <div  className={style.block}>what you likes ?</div>
          </div>
          
         </div>
        </div>
     
      
    </div>
    </>
  )
}

export default About