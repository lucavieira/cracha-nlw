const linksSocialMedia = {
  github: 'lucavieira',
  linkedin: 'lucas-vieira-dev',
  instagram: '_lucass_vieira_',
  twitter: 'LucasVDev',
  facebook: 'lukas.veras.904'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      bio.textContent = data.bio
    })
}

getGitHubProfileInfos()

function changeSocialMediaIcons(id) {
  let icon = document.getElementById(id)
  icon.src = `images/${id}-color.svg`
}

function changeSocialMediaIconsBack(id) {
  let icon = document.getElementById(id)
  icon.src = `images/${id}-black.svg`
}
