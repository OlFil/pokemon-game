import React from "react";
import headerStyle from './header.module.scss'

const Header = ({title , descr}) =>{
return(
	<header className={headerStyle.root}>
		<div className={headerStyle.forest}></div>
		<div className={headerStyle.container}>
			<h1>{title}</h1>
			<p >{descr}</p>
		</div>
	</header>
)
}

export default Header;