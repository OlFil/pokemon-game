import React from "react";
import layoutStyle from './layout.module.scss'

const Layout = ({title, descr, urlBg, colorBg, children}) =>{
	const styleBg={
		backgroundImage : `url(${urlBg})`,
		backgroundColor: `${colorBg}`
};
return(
	<section className={layoutStyle.root} style={styleBg}>
		<div className={layoutStyle.wrapper}>
			<article >
				<div className={layoutStyle.title}>
					<h3>{title}</h3>
					<span className={layoutStyle.separator}></span>
				</div>
				<div className={`${layoutStyle.desc} ${layoutStyle.full}`}>
					<p>{descr}</p>
					{children}
				</div>
				
			</article>
		</div>
	</section>
)
}

export default Layout;