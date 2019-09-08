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

const teamBuilder = () => {
  let teamString = '';
  for(let i = 0; i<teams.length;i++){
    teamString +=`<div class="card" style="width: 18rem;">
    <img src="${teams[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text text-center">${teams[i].name}</p>
      <p class="card-text text-center">${teams[i].coach}</p>
    </div>
    </div>`;
  }
  PTD(teamString,'cards');
}
// teamBuilder();
