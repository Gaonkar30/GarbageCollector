import React from 'react'
import "./team.css"
import TeamCard from "../components/TeamCard"
import HeaderUser from "../components/HeaderUser"

function UserTeam() {
  return (
    <div className='teams'>
    <HeaderUser/>
      <div class="container">
        <div class="section-title">
            <h1>Our Team </h1>
        </div>

        <div class="row">


           <TeamCard imgaddress={require("../components/boy.png")} teamName="Abinav Hubli" title="some guy" persondes="nigga" email="nigga12@gmail.com" twitterlink="#" facebooklink="#" LinkedinLink="#" InstagramLink="#" ></TeamCard>

           <TeamCard imgaddress={require("../components/boy.png")} teamName="Abinav Hubli" title="some guy" persondes="nigga" email="nigga12@gmail.com" twitterlink="#" facebooklink="#" LinkedinLink="#" InstagramLink="#" ></TeamCard>

           <TeamCard imgaddress={require("../components/boy.png")} teamName="Abinav Hubli" title="some guy" persondes="nigga" email="nigga12@gmail.com" twitterlink="#" facebooklink="#" LinkedinLink="#" InstagramLink="#" ></TeamCard>

           
        </div>

    </div>
    </div>
  )
}

export default UserTeam
