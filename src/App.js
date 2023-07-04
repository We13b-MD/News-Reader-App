import React, {useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";
import "./Style.css"
import wordstonumbers from "words-to-numbers"
const alankey = "cb9376b5ecfa1032b8ac26f4de273aad2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  //with hooks we do array destructuring 
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(()=> {
// we get the key that allows us to use allan
function alanBTN(){
alanBtn({
  key:alankey,
  
onCommand:({command,articles,number})=>{
//using if statements to recognise certain commands
if(command === 'newHeadlines'){
setNewsArticles(articles);
setActiveArticle(-1)// so that it can call new articles
} else if(command === "highlight"){
setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1)
// for the open command 

}else if (command === 'open') {
  const parsednumber = number.length > 2 ? wordstonumbers(number,{fuzzy:true}) : number;
  const article = articles[parsednumber - 1];

  if(parsednumber > 20){
alanBtn().playText('Please try that again.')

  }else if (article && article.url) {
    window.open(article.url, '_blank');
    alanBtn().playText('Opening...');
  } 
}
}

})
}
requestAnimationFrame(alanBTN);
  }, [])
  // if you leave only one array it tell us that the app will 
  //only run one time
  return (
    <div>
     <div className = "logoContainer">
     <img className = "alanlogo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEUzvtmkBh-oesLLVagdE0shA3GxgH5oZiA&usqp=CAU" alt = "alan logo"/>
     </div>
    <NewsCards articles = {newsArticles} activeArticle = {activeArticle}/>
    </div>
  );
}

export default App;
