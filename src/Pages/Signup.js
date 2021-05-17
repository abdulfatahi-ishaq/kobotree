import styled from 'styled-components';

import React from 'react';
import SignUp from '../components/Signup';
import SideBarLayout from '../components/SideBar';
import '../components/Signup/styles.css';
import Variables from '../components/Variables';

export const SignWrapper = styled.div`
	@media (max-width: ${Variables.lg}) {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		.form-container {
			.form-content-left {
				display: none;
			}
		}
	}
`;

function Signup() {
	return (
		<SignWrapper>
			<div className='form-container'>
				<div className='form-content-left text-center'>
					<SideBarLayout />
				</div>
				<SignUp />
			</div>
		</SignWrapper>
	);
}

export default Signup;
