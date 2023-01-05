const quotes =[
    {quote:"모든 일에 있어서 시간이 부족하지 않을까를 걱정하지 말고 다만 내가 마음을 바쳐 최선을 다 할 수 있을지 그것을 걱정하라.",
    author:"-정조"}
    ,{quote:"말은 망령되게 하지 말아야 한다. 기품을 지키되 사치하지 말 것이고, 지성을 갖추되 자랑하지 말라.",
    author:"-신사임당"}
    ,{quote:"겸손은 사람을 머물게 하고, 칭찬은 사람을 가깝게 하고, 넓음은 사람을 따르게 하고, 깊음은 사람을 감동케 한다.",
    author:"-정약용"}
    ,{quote:"The man who believes he can do it is probaby right,and so is the man who says he can't..",
    author:"-Charles de Gaulle"}
    ,{quote:"If you quit ONCE it becomes a habit. Never quit!!!",
    author:"-Michael Jordan"}
    ,{quote:"If you aren't going all the way, why go at all?",
    author:"-Joe Namath "}
    ,{quote:"Great things are not done by impulse, but a series of small things brought together.",
    author:"-Vincent van Gogh"},
    ,{quote:"Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why.",
    author:"-Eddie Cantor"},
    ,{quote:"Happiness sneaks in through a door you didn't know you left open.",
    author:"-John Barrymore"},
    ,{quote:"Happiness sneaks in Look behind the pain! Joy is bound to permeate after hardship.",
    author:"-Johann Wolfgang von Goethe"},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//                                     ▽0과 1사이의 랜덤숫자    ▽array의 길이숫자
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];    
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/*Math.round():반올림시켜~~ 1.0~1.4->1 /1.5~1.9->2 
Math.ceil():천장까지 끌어올려~~~ 1->1/ 1.01~1.9->2
Math.floor() :바닥까지 내려버려~~~1.9999->1
*/ 
