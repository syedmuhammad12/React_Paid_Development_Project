import * as React from 'react'
import './Lifecycle.css'
import background1 from '../../assets/background1.jpeg'
import { Container } from 'react-bootstrap'

export default function LifeCycle(){
    return(
        <Container fluid className='container3'>
            <div style={{ backgroundImage:`url(${background1})` ,backgroundRepeat:"no-repeat", }} className='back2'>
            <h1 >System Development LifeCycle</h1>
            <div className='onerow'>

              <div className='card-container' id='g'>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>first</h3>
                    </div>
                </div>
              </div>

              <div className='card-container' id='y'>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>first</h3>
                    </div>
                </div>
              </div>

            </div>

            <div className='tworow'>
                
              <div className='card-container' id='y'>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>first</h3>
                    </div>
                </div>
              </div>

              <div className='card-container' id='g'>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>first</h3>
                    </div>
                </div>
              </div>

            </div>

            <div className='threerow'>
            <div className='card-container' id='g'>
                <div className='card-content'>
                    <div className='card-title'>
                    <h3>firstdfsddfhwgaefdegka<br/>fgyyafyeafgeayfgeaifgseaifseg8a<br/>7ofs8aegsa78oefseoafheoaseai9fhe9afhe9heafhsea9f7seaofh</h3>
                    </div>
                </div>
              </div>

              <div className='card-container' id='y'>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>firstdfsddfhwgaefdegka<br/>fgyyafyeafgeayfgeaifgseaifseg8a<br/>7ofs8aegsa78oefseoafheoaseai9fhe9afhe9heafhsea9f7seaofh</h3>
                    </div>
                </div>
              </div>

            </div>

            </div>

        </Container>





    )}