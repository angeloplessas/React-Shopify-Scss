//@flow
import * as React from 'react';
import {Container} from '../../../components/Grid';
import { DotsDelimiters } from '../../../components/Icons';
import { withFadeEffect } from '../../../components/tools';
import './personal.css';

type Props = {
	fade: boolean
}
function PersonalProfile({fade}: Props) {
	return (
		<section className="personal-profile-preview">
			<Container>
				<img className={`screen-shot ${fade ? 'fadeInBottom' : ''} new-screenshot`} src={require('../../../assets/img/home/new-preview-profile.png')} alt="Personal Profile Preview"/>				
			</Container>			
		</section>
	)
}

export default withFadeEffect(PersonalProfile);