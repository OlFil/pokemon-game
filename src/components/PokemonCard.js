import React from "react";
import { useState } from "react";
import cardStyle from './card.module.scss'
import BackImg from '../assets/card-back-side.jpg'


const PokemonCard=({name,img,id,type,value})=>{
	const [isActive,setActive]=useState(false);

const handleClick=()=>{
	setActive(!isActive);
};
	return (
		<div className={cardStyle.root} onClick={handleClick}>
		<div className={`${cardStyle.pokemonCard} ${isActive ? cardStyle.active : ''}`}>
		<div className={cardStyle.cardFront}>
		<div className={`${cardStyle.wrap} ${cardStyle.front}`}>
		<div className={`${cardStyle.pokemon} ${cardStyle[type]}`}>
		<div className={cardStyle.value}>
		<div className={`${cardStyle.count} ${cardStyle.top}`}>{value.top}</div>
		<div className={`${cardStyle.count} ${cardStyle.right}`}>{value.right}</div>
		<div className={`${cardStyle.count} ${cardStyle.bottom}`}>{value.bottom}</div>
		<div className={`${cardStyle.count} ${cardStyle.left}`}>{value.left}</div>
		</div>
		<div className={cardStyle.imgContainer}>
		<img src={img} alt={name} />
		</div>
		<div className={cardStyle.info}>
		<span className={cardStyle.number}>#{id}</span>
<h3 className={cardStyle.name}>{name}</h3>
<small className={cardStyle.type}>Type: <span>{type}</span></small>
</div>
</div>
</div>
</div>
<div className={cardStyle.cardBack}>
<div className={`${cardStyle.wrap} ${cardStyle.back}`}>
<img src={BackImg} alt="Сard Backed" />
</div>
</div>
</div>
</div>
	)
}

export default PokemonCard;