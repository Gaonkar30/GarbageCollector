import React from 'react'
import DriverHeader from '../components/DriverHeader'
import UserTeam from './UserTeam'
import TeamCard from "../components/TeamCard"
import "./team.css"
import "./driverteam.css"
function DriverTeam() {
  return (
    <div className='driverteampg'>
      <DriverHeader/>
      <div class="container">
        <div class="section-title">
            <h1>Our Team </h1>
        </div>

        <div class="row">


           <TeamCard imgaddress={require("../components/boy.png")} teamName="Abinav Virupakshi" title="Plays Badmintion" persondes="Logical thinker
           " email="abinavvp@gmail.com" twitterlink="https://www.twitter.com/" facebooklink="https://www.facebook.com/" LinkedinLink="https://www.linkedin.com/" InstagramLink="https://www.instagram.com/" ></TeamCard>

           <TeamCard imgaddress={require("../components/boy.png")} teamName="Akash G Gaonkar" title="Beatboxer" persondes="Gym lover" email="akashgg@gmail.com" twitterlink="https://www.twitter.com/" facebooklink="https://www.facebook.com/" LinkedinLink="https://www.linkedin.com/" InstagramLink="https://www.instagram.com/" ></TeamCard>

           <TeamCard imgaddress={require("../components/boy.png")} teamName="Abishek Kundapur" title="Rubick's Cube solver" persondes="Chess lover" email="abishek@gmail.com" twitterlink="https://www.twitter.com/" facebooklink="https://www.facebook.com/" LinkedinLink="https://www.linkedin.com/" InstagramLink="https://www.instagram.com/" ></TeamCard>

           
        </div>

    </div>
    </div>
  )
}

export default DriverTeam
