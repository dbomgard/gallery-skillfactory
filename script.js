const btn = document.querySelector('.btn')
const imagesWrap = document.querySelector(".images_wrap")
const loader = document.querySelector(".loader")

function showLoader () {
  loader.style.display = "block"
}

function hideLoader () {
  loader.style.display = "none"
}

async function loadImages () {
  try {
    showLoader()
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
     
    if (!res.ok) {
      throw new Error ('Ошибка')
    }
    
    const data = await res.json()
    if (data) {
      showImages(data)
    }
  } catch(err) {
      console.log(err.message)
    } finally {
      hideLoader()
    }
}   

function showImages(data) {
  for (let i = 0; i < data.length; i++) {
    let image = document.createElement('img')
    image.src = data[i].url
    imagesWrap.appendChild(image)
  }
}

btn.addEventListener('click', loadImages)