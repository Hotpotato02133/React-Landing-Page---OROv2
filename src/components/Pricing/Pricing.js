import React from 'react';
import { Button } from '../../globalStyles';
import { GiCarWheel, GiGemChain, GiMedicines, GiShop, GiSmartphone } from 'react-icons/gi';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
} from './PricingData';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper >
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard style={{ backgroundColor: '#F8FAFA', height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiMedicines />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636', textAlign: 'center'}}>ORO Wonder Drug</PricingCardPlan>
                <PricingCardCost style={{ color: '#363636'}}>Pharmacy</PricingCardCost><br />
                <Button primary>Learn More</Button><br />
                
              </PricingCardInfo>
            </PricingCard>
            <PricingCard style={{ backgroundColor: '#F8FAFA',  height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiGemChain />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636', textAlign: 'center'}}>ORO MegaWorld</PricingCardPlan>

                <PricingCardCost style={{ color: '#363636'}}>Jewelry</PricingCardCost><br />
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard style={{ backgroundColor: '#F8FAFA', height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636', textAlign: 'center'}}>ORO MegaWorld</PricingCardPlan>
                <PricingCardCost style={{ color: '#363636'}}>Pawnshop</PricingCardCost><br />
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            {/* Create another Pricing Card here but in next row or next line */}

            <PricingCard style={{ backgroundColor: '#F8FAFA', height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiShop />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636', textAlign: 'center'}}>ORO Convenience Store</PricingCardPlan>
                <PricingCardCost style={{ color: '#363636'}}>Grocery</PricingCardCost>
                <br />
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>


            <PricingCard style={{ backgroundColor: '#F8FAFA', height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCarWheel />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636', textAlign: 'center'}}>Foton Cars</PricingCardPlan>
                <PricingCardCost style={{ color: '#363636'}}>Automobile</PricingCardCost>
                <br />
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard style={{ backgroundColor: '#F8FAFA', height: '325px'}} to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiSmartphone />
                </PricingCardIcon>
                <PricingCardPlan style={{ color: '#363636'}}>ORO Telecom</PricingCardPlan>
                <PricingCardCost style={{ color: '#363636'}}>Cellshop</PricingCardCost>
                <br />
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>

          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;