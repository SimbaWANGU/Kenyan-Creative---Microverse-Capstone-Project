const speakers = [{
  id: 1,
  name: 'Bien-Aime Baraza',
  image: '../assets/images/bien.png',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
{
  id: 2,
  name: 'Barbara Minishi',
  image: '../assets/images/minishi.jpg',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
{
  id: 3,
  name: 'Bien-Aime Baraza',
  image: '../assets/images/bien.png',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
{
  id: 4,
  name: 'Barbara Minishi',
  image: '../assets/images/minishi.jpg',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
{
  id: 5,
  name: 'Bien-Aime Baraza',
  image: '../assets/images/bien.png',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
{
  id: 6,
  name: 'Barbara Minishi',
  image: '../assets/images/minishi.jpg',
  occupation: 'Sauti Sol, Singer',
  description: 'One of four members of the band Sauti Sol who have contributed to take Kenyan music to new heights',
},
];

const speakerContainer = document.getElementById('speaker-container');

speakers.forEach((speaker) => {
  const speakerContainerItem = document.createElement('div')
  speakerContainerItem.classList.add('speaker-container-item')

  const img = document.createElement('img')
  img.setAttribute('alt', ' ');
  img.setAttribute('src', speaker.image);
  speakerContainerItem.appendChild(img);

  const speakerCards = document.createElement('div')
  speakerCards.classList.add('speaker-cards')

  const h4Title = document.createElement('h4')
  h4Title.innerText = speaker.name
  speakerCards.appendChild(h4Title)

  const h5Title = document.createElement('h5')
  h5Title.innerText = speaker.occupation
  speakerCards.appendChild(h5Title)

  const hr = document.createElement('hr')
  speakerCards.appendChild(hr)

  const paragraph = document.createElement('p')
  paragraph.innerText = speaker.description
  speakerCards.appendChild(paragraph)


  speakerContainerItem.appendChild(speakerCards)
  
  speakerContainer.appendChild(speakerContainerItem)
})

document.querySelector('.hamburger_icon').addEventListener('click', () => {
  document.querySelector('.menu_item_container').classList.toggle('show');
  document.querySelectorAll('.mobile_background').forEach((section) => {
    section.classList.toggle('blur');
  });
});
document.querySelector('.close_icon').addEventListener('click', () => {
  document.querySelector('.menu_item_container').classList.toggle('show');
  document.querySelectorAll('.mobile_background').forEach((section) => {
    section.classList.toggle('blur');
  });
});
document.querySelectorAll('.navlist-item-mobile').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.menu_item_container').classList.toggle('show');
    document.querySelectorAll('.mobile_background').forEach((section) => {
      section.classList.toggle('blur');
    });
  });
});