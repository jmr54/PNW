import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { Email } from './Email';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      {/* Apply justify-content-center to center the content horizontally */}
      <MDBContainer className='p-4 d-flex justify-content-center align-items-center'>
        <section className='email-center'>
          <div className="email-container">
            <Email/>
          </div>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Beverly Christianson
      </div>
    </MDBFooter>
  );
}
