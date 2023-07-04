

import React, {useState,useEffect,createRef} from "react";
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button,Typography} from '@mui/material';
import styles from "./.style.module.css";
import classnames from 'classnames';



function NewsCard({articles:{description,publishedAt,source,title,url,urlToImage},i, activeArticle}){

               
	const highlightarticle = {
    borderBottom: activeArticle === i ? '10px solid #FF3800' : 'transparent'
    
    // Add more dynamic styles here
  };
const [ELRefs, setELRefs]  = useState([]);

const scrollToRef = (ref)=> window.scroll(0,ref.current.offsetTop - 50);
// -50 will help it get a bit above the card 

// 1st useffect is onlu used only at the start to set up our references
useEffect(()=>{
setELRefs ((refs)=> Array(20).fill().map((_, j)=> refs[j] || createRef()))


}, []);

//second use effect has to be run each time alan starts reading
//a new article
useEffect(()=>{
if(i === activeArticle && ELRefs[activeArticle]){
scrollToRef(ELRefs[activeArticle])

}


}, [i, activeArticle, ELRefs] )


return (

<Card ref = {ELRefs[i]} className = {styles.card} style = {highlightarticle}>
<CardActionArea href = {url} target = "_blank"/*_blank means it will open in a website rather than top of our page*/  style = {{paddingBottom:"40px"}}>
<CardMedia className ="media" image = {urlToImage ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z2vkbGfwcIqMmmMvZJGqmVOkmTU6_5np1A&usqp=CAU"}/>
<div className = "details">
<Typography variant = "body2" color = "textSecondary" component = "h2"> {(new Date(publishedAt)).toDateString()}</Typography>
<Typography variant = "body2" color = "textSecondary" component = "h2">{source.name}</Typography>
</div> 

<Typography className = "title" gutterBottom variant = "h5" style = {{fontSize:"15px"}}>{title}</Typography>
<CardContent>
<Typography variant= "body2" color = "textSecondary" component = "p" style = {{fontSize:"10px"}}>{description}</Typography>

</CardContent>
</CardActionArea>
<CardActions className = "cardactions">
<Button size = "small" color = "primary">Learn more</Button>
<Typography variant = "h5" color ="textSecondary">{i+1}</Typography>
</CardActions>

</Card>

	)

}

export default NewsCard;




 