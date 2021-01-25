const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name:'珍妮佛羅培茲',
        position:'Coin Master',
        photo:'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2020-11/beadfefa-77b9-482f-9242-c4041460b6b3_m.jpg',
        text:'雪莉'
    },
    {
        name:'雪莉',
        position:'Coin Master',
        photo:'https://exp.gg/wp-content/uploads/2020/12/160854517141506_P9721293.png',
        text:'Wow ! 珍妮佛羅培茲'
    },
    {
        name:'珍妮佛羅培茲',
        position:'Coin Master',
        photo:'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2020-11/beadfefa-77b9-482f-9242-c4041460b6b3_m.jpg',
        text:'你剛攻擊我的村莊?'
    },
    {
        name:'珍妮佛羅培茲',
        position:'Coin Master',
        photo:'https://s.yimg.com/ny/api/res/1.2/Ef_tVyuACftDH3JV5ioc0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD03MDEuNzM-/https://media.zenfs.com/en/setn.com.tw/84d0c4e2389283eddd430ee7ce6814cf',
        text:'我的 Coin Master 村莊'
    },
    {
        name:'雪莉',
        position:'Coin Master',
        photo:'https://exp.gg/wp-content/uploads/2020/12/160854517141506_P9721293.png',
        text:'呃.... 應該是吧'
    },
    {
        name:'路人甲',
        position:'路人',
        photo:'https://i.ytimg.com/vi/4oa6FkONF04/mqdefault.jpg',
        text:'酷欸~~'
    },
    {
        name:'雪莉',
        position:'Coin Master',
        photo:'https://exp.gg/wp-content/uploads/2020/12/160854517141506_P9721293.png',
        text:'你大老遠跑來這裡，就因為我攻擊你的村莊 ?'
    },
    {
        name:'珍妮佛羅培茲',
        position:'Coin Master',
        photo:'https://memes.tw/user-template/4a0a03d2a5342daee558a013cb7c7bc3.png',
        text:'呃....我也為此而來'
    },

]

let idx = 1

function updateTestimonial () {
    const { name , position, photo, text} = testimonials[idx]
    testimonial.innerText = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position
    idx++
    if(idx>testimonials.length - 1 ) idx = 0
}
setInterval(updateTestimonial,1800)