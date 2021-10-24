let getgitHub = prompt('github.com/')
let getYoutube = prompt('youtube.com/')
let getInstagram = prompt('instagram.com/')
let getFacebook = prompt('facebook.com/')
let getTwitter = prompt('twitter.com/')

const linksSocialMidia = {
  github: getgitHub,
  youtube: getYoutube,
  facebook: getFacebook,
  instagram: getInstagram,
  twitter: getTwitter
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`
  }
}
changeSocialMidiaLinks()

function getGitHubPrifaleInfos() {
  const url = `https://api.github.com/users/${linksSocialMidia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

getGitHubPrifaleInfos()
