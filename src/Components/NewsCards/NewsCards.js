
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import {Grid, Grow, Typography } from '@mui/material';
 
 import "./style.css";


 const infoCards = [
{color: "#00838f", title: "Latest News", text: "Give me the latest  news"},
{color :"#1565c0", title:"News by Categories",info:"Business, Entertainment,General, Health,Science,Sports, Technology", text:"Give me the news from"},
{color : "#4527a0", title:"News by Terms", info:"Bitcoin,PlayStation5 , SmartPhones, Donald Trump...", text: "Whats up with PLayStation 5"},
{color : "#283593", title:"News by Sources", info:"CNN,Wired,BBC News,Time, IGN, Buzzfeed, ABC News...", text:"Give me news from CNN "}
];

/*Inorder for a user to see the articles*/
function NewsCards({articles, activeArticle}){
	if(!articles.length){
return(

<Grow in>
<Grid className = "Container"   container alignItems = "stretch" spacing ={3}>
{infoCards.map((infoCard)=>(
<Grid item xs = {12} sm = {6} md = {4} lg={3} className = "infoCard">
<div className = "Card" style = {{backgroundColor:infoCard.color}}>
<Typography variant = "h6" style = {{fontSize:"15px"}}>{infoCard.title} </Typography>
{
	infoCard.info 
	 ?(<Typography  variant ="h6">
<strong>
{infoCard.title.split(" ")[2]}:
	</strong>
     <br />
     {infoCard.info}
	
	</Typography>) : null}
	<Typography variant = "h6"> Try saying: <br /><i>{infoCard.text}</i></Typography>
</div>
</Grid>
	))};

</Grid>
</Grow>
);
}
return(
<Grow in>

<Grid className = "Container"   container alignItems = "stretch" spacing ={3}>

{articles.map((articles, i )=>(
	<Grid key = {i} item xs = {12} sm= {6} md = {2} lg = {3} style = {{display:'flex'}}>
<NewsCard articles ={articles} activeArticle = {activeArticle} i= {i} /> 
</Grid>
	))}
</Grid>
</Grow>

	)

};


export default NewsCards;