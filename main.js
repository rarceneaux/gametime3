// Add teams array

const teams = [
  {
    name: 'Titans',
    img:'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg',
    coach:'Raymond'
},
{
  name:'Rams',
  img:'https://i.pinimg.com/originals/88/79/a4/8879a4f189033c8f6615d10b895b0046.jpg',
  coach: 'Raymond'
},
{
  name:'Seahawks',
  img:'https://static.clubs.nfl.com/seahawks/zadj3ehrnxwhvl6swapk',
  coach: 'Carla'
},
{
  name:'Chiefs',
  img:'https://pbs.twimg.com/profile_images/686564181294866432/rVDkZsSS_400x400.jpg',
  coach:'Carla'
},
{
  name:'Falcons',
  img:'https://b3h2.scene7.com/is/image/BedBathandBeyond/147165763339468p?$imagePLP$&wid=256&hei=256',
  coach:'Chandler'
},
{
  name:'Saints',
  img:'https://d1si3tbndbzwz9.cloudfront.net/football/team/30/logo.png',
  coach:'Chandler'
}];

// console.log(teams);

const PTD = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
}


// For Loop
// const teamBuilder = (teamsArray) => {
//   let teamString = '';
//   for(let i = 0; i<teamsArray.length;i++){
//     const team = teamsArray[i];
//     teamString +=`<div class="card" style="width: 18rem;">
//     <img src="${team.img}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <p class="card-text text-center">${team.name}</p>
//       <p class="card-text text-center">${team.coach}</p>
//     </div>
//     </div>`;
//   }
//   PTD(teamString,'cards');
// }


const teamBuilder = (teams) => {
  let cardString = '';
  teams.forEach((squad) => {
    cardString +=`<div class="card" style="width: 18rem;">
          <img src="${squad.img}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text text-center">${squad.name}</p>
         <p class="card-text text-center">${squad.coach}</p>
          </div>
         </div>`;
  })
  PTD(cardString,'cards');
}
// teamBuilder();

const printBtns = () => {
  let btnString = `<button id='Raymond' type="button" class="btn btn-primary">Raymond</button>
  <button id='Chandler' type="button" class="btn btn-secondary">Chandler</button>
  <button id='Carla' type="button" class="btn btn-success">Carla</button>
  <button id='All' type="button" class="btn btn-danger">All</button>`;
  PTD(btnString,'myBtns');
}
printBtns();

// const btnEvents = (e) => {
//   const coach = e.target.id;
//   const selectedTeams = [];
//   for(let i =0;i<teams.length;i++){
//     const team = teams[i];
//     if(team.coach === coach){
//       selectedTeams.push(team);
//     }
//   }
//   if (coach === 'All') {
//     teamBuilder(teams);
//   } else {
//     teamBuilder(selectedTeams);
//   }
// }

const btnEvents = (e) => {
  const btnClicked = e.target.id;
  if(btnClicked === 'Raymond'){
    let rayTeams = teams.filter(rTeams => rTeams.coach ==='Raymond');
    teamBuilder(rayTeams);
  } else if (btnClicked === 'Chandler'){
    let chanTeams = teams.filter(chTeams => chTeams.coach === 'Chandler');
    teamBuilder(chanTeams);
  } else {
    let ccTeams = teams.filter(caTeams => caTeams.coach === 'Carla');
    teamBuilder(ccTeams);
  } 
}

const allTeams = (e) => {
  teamBuilder(teams);
}
allTeams();


document.getElementById('Raymond').addEventListener('click',btnEvents);
document.getElementById('Chandler').addEventListener('click',btnEvents);
document.getElementById('Carla').addEventListener('click',btnEvents);
document.getElementById('All').addEventListener('click',allTeams);

// teamBuilder(teams);