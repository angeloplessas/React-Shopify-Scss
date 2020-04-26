//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../routes';
import {Container, Row, Col} from '../../Grid';
import './blockcontent.css';

type Props = {
	img: string,
	title: string,
	subtitle: string,
	label: string,
	direction?: string,
	className?: string,
	labelOrange?: boolean,
	children?: React.Node
}

function BlockContent({img, title, subtitle, label, className = "", children, labelOrange = false, direction = 'ltr'}: Props) {
	return (
		<section className={`block-content-section ${direction === 'ltr' ? 'rtl' : 'ltr'}`}>
			<Container style={{position: 'relative'}}>
				{children}
				<Row flex wrap>
					<Col tbPush={0.1} tb={5.9} xs={12} style={{order: direction === 'ltr' ? 1 : 2}}>
						<div className="block__content__image" style={{backgroundImage: `url(${img})`}}/>
					</Col>
					{/* <Col tb={5.9} xs={12} style={{order: direction === 'ltr' ? 1 : 2}}> */}
                    <div className={`block_content_new`}>
						<div className={`block__content`}>
							<span className={`item-label ${labelOrange ? 'orange-color' : ''}`}>{label}</span>
							<h2 className="section-title enlarged">
                                {title}
                                <span role="img" aria-labelledby="palm">👋</span>    
                            </h2>
							<p className="section-subtitle">{subtitle}</p>
							<Link to={ROUTES.AUTH.USER_REGISTER} className="btn">Get started</Link>
						</div>
                    </div>                    
					{/* </Col> */}
                    <div className={`mid_image`}></div>
				</Row>
			</Container>
		</section>
	)
}

export default BlockContent;